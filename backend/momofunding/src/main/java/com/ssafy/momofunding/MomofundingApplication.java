package com.ssafy.momofunding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.TimeZone;

@EnableJpaAuditing
@SpringBootApplication
public class MomofundingApplication {



	public static void main(String[] args) {
		SpringApplication.run(MomofundingApplication.class, args);
	}

}
