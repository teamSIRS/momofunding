package com.ssafy.momofunding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MomofundingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MomofundingApplication.class, args);
	}

}
