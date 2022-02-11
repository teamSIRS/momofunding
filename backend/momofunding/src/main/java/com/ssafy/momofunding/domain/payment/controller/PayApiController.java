package com.ssafy.momofunding.domain.payment.controller;


import com.ssafy.momofunding.domain.payment.service.PayService;
import com.ssafy.momofunding.domain.reward.dto.RewardPayAndSaveRequestDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("/payment")
public class PayApiController {
    private final PayService payService;

    //pay
    @Operation(
            summary = "결제 서비스 동작",
            description = "여러 소셜 결제를 진행 할 수 있음 " +
                    "social = 'kakao' or 'naver' "
    )
    @Parameter(name = "social", description = "결제 서비스 종류", required = true)
    @GetMapping("/kakao")
    public ResponseEntity selectSocial(@RequestBody RewardPayAndSaveRequestDto rewardPayAndSaveRequestDto) throws IOException {
        Map<String, Object> responseMap = new HashMap<>();

        URL url = new URL("https://kapi.kakao.com/v1/payment/ready");
        HttpURLConnection serverConnection = (HttpURLConnection) url.openConnection();
        serverConnection.setRequestMethod("POST");
        serverConnection.setRequestProperty("Authorization", "KakaoAK 4f50566635ad0cb48f2cbc0f0df35a4d");
        serverConnection.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=euc-kr");
        serverConnection.setDoOutput(true);

        String param = "cid=TC0ONETIME&" +
                "partner_order_id=partner_order_id&" +
                "partner_user_id=partner_user_id&" +
                "item_name=" + rewardPayAndSaveRequestDto.getName() + "\n" + rewardPayAndSaveRequestDto.getContent() + "&" +
                "quantity=" + rewardPayAndSaveRequestDto.getQuantity() + "&" +
                "total_amount=" + rewardPayAndSaveRequestDto.getAmount() + "&" +
                "vat_amount=0&" +
                "tax_free_amount=0&" +
                "approval_url=http://localhost:3000/pay/success&" +
                "fail_url=https://localhost:3000/pay/fail&" +
                "cancel_url=https://localhost:3000/pay/fail";

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

        responseMap.put("urlInfo", bufferedReader.readLine());
        responseMap.put("rewardOrderInfo", rewardPayAndSaveRequestDto);

        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
