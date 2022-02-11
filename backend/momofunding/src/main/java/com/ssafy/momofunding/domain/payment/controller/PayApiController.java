package com.ssafy.momofunding.domain.payment.controller;


import com.ssafy.momofunding.domain.payment.service.PayService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

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
    public ResponseEntity selectSocial() throws IOException {


        URL url = new URL("https://kapi.kakao.com/v1/payment/ready");
        HttpURLConnection serverConnection = (HttpURLConnection) url.openConnection();
        serverConnection.setRequestMethod("POST");
        serverConnection.setRequestProperty("Authorization", "KakaoAK 4f50566635ad0cb48f2cbc0f0df35a4d");
        serverConnection.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        serverConnection.setDoOutput(true);

        String param = "cid=TC0ONETIME&" +
                "partner_order_id=partner_order_id&" +
                "partner_user_id=partner_user_id&" +
                "item_name=SSAFUS Reward Gold&" +
                "quantity=1&" +
                "total_amount=54000&" +
                "vat_amount=4000&" +
                "tax_free_amount=0&" +
                "aplprova_url=http://localhost:3000&" +
                "fail_url=https://naver.com&" +
                "cancel_url=https://instagram.com/";

        OutputStream output = serverConnection.getOutputStream();
        DataOutputStream dataOutput = new DataOutputStream(output);

        dataOutput.writeBytes(param);
        dataOutput.close();

        int resultCode = serverConnection.getResponseCode();

        InputStream inputStream;
        if (resultCode == 200) inputStream = serverConnection.getInputStream();
        else inputStream = serverConnection.getErrorStream();

        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);

        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

        return ResponseEntity.status(HttpStatus.OK).body(bufferedReader.readLine());
    }

}
