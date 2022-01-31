package com.ssafy.momofunding.global.service;

import com.ssafy.momofunding.global.exception.UnAuthorizedException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String SALT;
    private static final int EXPIRE_MINUTES = 30;


    public <T> String create(String key, T data, String subject) {
        String jwt = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("regDate", System.currentTimeMillis())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * EXPIRE_MINUTES))
                .setSubject(subject)
                .claim(key, data)
                .signWith(this.generateKey(), SignatureAlgorithm.HS512)
                .compact();
        return jwt;
    }

    private SecretKey generateKey() {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(SALT));
        return key;
    }

    //	전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
    public boolean isUsable(String jwt) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(this.generateKey()).build().parseClaimsJws(jwt);
            return true;
        } catch (Exception e) {
//			if (logger.isInfoEnabled()) {
//            e.printStackTrace();
//			} else {
//            logger.error(e.getMessage());
//			}
			throw new UnAuthorizedException();
//			개발환경
        }
    }

    public Map<String, Object> get(String key) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        String jwt = request.getHeader("access-token");
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parserBuilder().setSigningKey(SALT.getBytes("UTF-8")).build().parseClaimsJws(jwt);
        } catch (Exception e) {
//			if (logger.isInfoEnabled()) {
//            e.printStackTrace();
//			} else {
//            logger.error(e.getMessage());
//			}
            throw new UnAuthorizedException();
//			개발환경
//			Map<String,Object> testMap = new HashMap<>();
//			testMap.put("userid", userid);
//			return testMap;
        }
        Map<String, Object> value = claims.getBody();

        return value;
    }

    public String getUserId() {
        return (String) this.get("user").get("userid");
    }

}
