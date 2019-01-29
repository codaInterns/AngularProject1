package com.example.Booking.Book.Security;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.Booking.Book.Security.jwt.JwtAuthenticationEntryPoint;
import com.example.Booking.Book.Security.jwt.JwtAuthenticationProvider;
import com.example.Booking.Book.Security.jwt.JwtAuthenticationTokenFilter;
import com.example.Booking.Book.Security.jwt.JwtSuccessHandler;

@EnableGlobalMethodSecurity(prePostEnabled=true)
@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	JwtAuthenticationProvider authenticationProvider;
	@Autowired
	JwtAuthenticationEntryPoint entryPoint;

	@Bean 
	JwtAuthenticationTokenFilter authenticationTokenFilter()
	{
		JwtAuthenticationTokenFilter filter=new JwtAuthenticationTokenFilter();
		filter.setAuthenticationManager(authenticationManager());
		filter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
		return filter;
	}
	
	@Bean
	public AuthenticationManager authenticationManager()
	{
		return new ProviderManager(Collections.singletonList(authenticationProvider));
	}
	
	@Override
	protected void configure(HttpSecurity http)throws Exception
	{
		
		http.csrf().disable()
		.authorizeRequests().antMatchers("**/book/**").authenticated()
		.and()
		.exceptionHandling().authenticationEntryPoint(entryPoint)
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		;
		http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
		http.headers().cacheControl();
	}
}
