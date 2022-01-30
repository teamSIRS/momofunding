package com.ssafy.momofunding.global.interceptor;

import com.ssafy.momofunding.global.exception.UnAuthorizedException;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor implements HandlerInterceptor {
    private static final String HEADER_AUTH = "pinako";

    private JwtService jwtService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        final String token = request.getHeader(HEADER_AUTH);

        if(token != null && jwtService.isUsable(token)){
            return true;
        }else{
            throw new UnAuthorizedException();
        }
    }
}
