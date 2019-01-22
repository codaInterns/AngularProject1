package com.test5.test5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.test5.test5"})
public class Test5Application {

	public static void main(String[] args) {
		SpringApplication.run(Test5Application.class, args);
	}

}

