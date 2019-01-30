package com.test5.test5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.test5.test5.filters.AuthFilter;

@SpringBootApplication

@ComponentScan({"com.test5.test5"})

public class Test5Application {

	@Bean
	public FilterRegistrationBean<AuthFilter> loggingFilter(){
	    FilterRegistrationBean<AuthFilter> authBean 
	      = new FilterRegistrationBean<>();
	         
	    authBean.setFilter(new AuthFilter());
	    authBean.addUrlPatterns("/JwtAuth/*");
	    return authBean;    
	    
	    
	    
	    
	    
	}
	public static void main(String[] args) {
		SpringApplication.run(Test5Application.class, args);
	}

}

