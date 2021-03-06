package com.ssafy.momofunding.global.interceptor;

import com.ssafy.momofunding.global.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    private static final String HEADER_AUTH = "Authorization";

    @Autowired
    private JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
//        System.out.println(request.getMethod());
//        System.out.println("jwteeeeeee");
        if (!HttpMethod.GET.matches(request.getMethod())) {
            return true;
        }
        final String token = request.getHeader(HEADER_AUTH);

        if (token != null && jwtService.isUsable(token)) {
            return true;
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "JWT UNAUTHORIZED");
        }

    }
}
