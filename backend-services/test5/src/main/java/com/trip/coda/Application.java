package com.trip.coda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.trip.coda.filters.AuthFilter;


@SpringBootApplication

@ComponentScan({"com.trip.coda"})

public class Application {

	@Bean
	public FilterRegistrationBean<AuthFilter> loggingFilter(){
	    FilterRegistrationBean<AuthFilter> authBean 
	      = new FilterRegistrationBean<>();
	         
	    authBean.setFilter(new AuthFilter());
	    authBean.addUrlPatterns("/JwtAuth/*");
	         
	    return authBean;    
	}
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}

