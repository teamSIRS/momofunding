package com.ssafy.momofunding.domain.util;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.momofunding.domain.reward.dto.RewardPayRequestDto;
import com.ssafy.momofunding.domain.rewardorder.service.RewardOrderService;
import com.ssafy.momofunding.global.service.JwtService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Tag(name = "Pay API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/payment")
public class PayApiController {

    private final RewardOrderService rewardOrderService;
    private final JwtService jwtService;

    @Value("${kakao.admin}")
    private String kakaoAdmin;

    @Value("${serverFrontUrl}")
    private String serverFrontUrl;

    //pay
    @Operation(
            summary = "결제 서비스 동작",
            description = "카카오 페이 소셜 결제를 진행 할 수 있음 "
    )
    @PostMapping("/kakao")
    public ResponseEntity<Map<String, Object>> selectSocial(@RequestBody RewardPayRequestDto rewardPayRequestDto) throws IOException {
        Map<String, Object> responseMap = new HashMap<>();

        Long rewardId = rewardOrderService.saveRewardOrder(rewardPayRequestDto);
        Long projectId = rewardPayRequestDto.getProjectId();
        String val2 = jwtService.createSmall("rewardId", rewardId, "Authorization");

        URL url = new URL("https://kapi.kakao.com/v1/payment/ready");
        HttpURLConnection serverConnection = (HttpURLConnection) url.openConnection();
        serverConnection.setRequestMethod("POST");
        serverConnection.setRequestProperty("Authorization", "KakaoAK "+ kakaoAdmin);
        serverConnection.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=euc-kr");
        serverConnection.setDoOutput(true);

        String param = "cid=TC0ONETIME&" +
                "partner_order_id=partner_order_id&" +
                "partner_user_id=partner_user_id&" +
                "item_name=" + rewardPayRequestDto.getName() + "\n" + rewardPayRequestDto.getContent() + "&" +
                "quantity=" + rewardPayRequestDto.getQuantity() + "&" +
                "total_amount=" + rewardPayRequestDto.getAmount() + "&" +
                "vat_amount=0&" +
                "tax_free_amount=0&" +
                "approval_url=" + serverFrontUrl + "pay/success/" + projectId + "&" +
                "fail_url=" + serverFrontUrl + "pay/fail/" + val2 + "&" +
                "cancel_url=" + serverFrontUrl + "pay/cancel/" + val2;


        byte[] utf8 = param.getBytes(StandardCharsets.UTF_8);

        OutputStream output = serverConnection.getOutputStream();
        DataOutputStream dataOutput = new DataOutputStream(output);

        dataOutput.write(utf8);
        dataOutput.close();
        int resultCode = serverConnection.getResponseCode();
        InputStream inputStream;
        if (resultCode == 200) inputStream = serverConnection.getInputStream();
        else inputStream = serverConnection.getErrorStream();

        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);

        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

        String x = bufferedReader.readLine();
        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, String> map = objectMapper.readValue(x, Map.class);

        responseMap.put("url", map.get("next_redirect_pc_url"));

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
