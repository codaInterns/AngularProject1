package com.trip.coda;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.Configurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import com.trip.coda.filters.AuthFilter;


@SpringBootApplication

@ComponentScan({"com.trip.coda"})

public class Application {
	
	private static final Logger LOGGER = LogManager.getLogger(Application.class);
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
         Configurator.setRootLevel(Level.TRACE);
		LOGGER.traceEntry("entered");
        LOGGER.info("The application starts");
	}

}

