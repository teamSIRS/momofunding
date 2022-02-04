package com.ssafy.momofunding.global.config;


import com.ssafy.momofunding.global.service.JwtService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Tag(name = "JwtAuth API")
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthJwtController {

    private final JwtService jwtService;
    private final static String AUTHTOKEN = "auth-token";

    //jwt인증
    @Operation(
            summary = "JWT토큰 인증",
            description = "jwt인증을 진행할 수 있다 " +
                    "Request Header에 'auth-token' 이름으로 jwt토큰을 넣어서 보내야함"
    )
    @GetMapping("/jwt")
    public ResponseEntity authJwt(HttpServletRequest request){
        Map<String, Boolean> responseMap = new HashMap<>();
        final String token = request.getHeader(AUTHTOKEN);
        try {
            responseMap.put("isValid", jwtService.isUsable(token));
        }catch (Exception e){
            responseMap.put("isValid", false);
            return ResponseEntity.status(HttpStatus.OK).body(responseMap);
        }
        return ResponseEntity.status(HttpStatus.OK).body(responseMap);
    }

}
