package com.trip.coda;


import org.apache.ibatis.type.MappedTypes;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.trip.coda.filters.AuthFilter;
import com.trip.coda.models.Flight;
import com.trip.coda.models.FlightBooking;
import com.trip.coda.models.Hotel;
import com.trip.coda.models.User;

@MapperScan("com.trip.coda.mapper")
@MappedTypes(value = { User.class,Hotel.class,Flight.class,FlightBooking.class })
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

