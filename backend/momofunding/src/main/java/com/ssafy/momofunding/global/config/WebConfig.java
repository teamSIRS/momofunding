package com.ssafy.momofunding.global.config;

import com.ssafy.momofunding.global.interceptor.JwtInterceptor;
import com.ssafy.momofunding.global.interceptor.MethodInteceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${spring.servlet.multipart.location}")
    private String imagePath;

    private static final List<String> methodPatterns = Arrays.asList("/**");

    private static final List<String>  excPatterns=
            Arrays.asList("/api/orders/fail","/api/users/sign-in", "/api/users/sign-up", "/api/users/email", "/api/users/password",
                    "/api/lives/**/viewerCount", "/api/lives/**/endLive", "/api/projects/**/complete","/api/payment/kakao/*");

    private static final List<String> addPatterns2 =
            Arrays.asList("/api/survey/**/**", "/api/survey-questions/*", "/api/orders/**/**");

    @Autowired
    private JwtInterceptor jwtInterceptor;

    @Autowired
    private MethodInteceptor methodInteceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        GET이외의 모든 작업에서 jwt인증을 함
        registry.addInterceptor(methodInteceptor)
                .addPathPatterns(methodPatterns)
                .excludePathPatterns(excPatterns);
//
//        //GET중에서 특정 URI만 jwt인증을 함
        registry.addInterceptor(jwtInterceptor)
                .addPathPatterns(addPatterns2);

    }


    @Override
    public void addCorsMappings(CorsRegistry registry) {
//		System.out.println("CORS Setting");
//		default 설정.
//		Allow all origins.
//		Allow "simple" methods GET, HEAD and POST.
//		Allow all headers.
//		Set max age to 1800 seconds (30 minutes).
        registry.addMapping("/**")
                .allowedMethods("GET", "POST", "DELETE", "PUT","OPTIONS")
//			.allowedOrigins("http://localhost:8080", "http://localhost:8081")
                .maxAge(18000);
    }

    //	Swagger UI 실행시 404처리
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/swagger-ui.html**").addResourceLocations("classpath:/META-INF/resources/swagger-ui.html");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");

        //server
//        imagePath.replace('\\', '/');

        //images 외부 경로
        registry.addResourceHandler("/api/images/project/**")
                .addResourceLocations("file:///"+ imagePath + "/project/");
        registry.addResourceHandler("/api/images/creator/**")
                .addResourceLocations("file:///"+ imagePath + "/creator/");
    }

}
