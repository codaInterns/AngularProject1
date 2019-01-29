package com.example.Booking.Book.Security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

public class JwtAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {

	public JwtAuthenticationTokenFilter() {
		super("/book/**");
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws  IOException, ServletException {
	
		String header=request.getHeader("Authorization");
		if(header==null || !header.startsWith("Token"))
		{
			throw new RuntimeException("jwt token is missing");
		}
		String authenticationToken=header.substring(5);
		JwtAuthenticationToken token=new JwtAuthenticationToken(authenticationToken);
		return getAuthenticationManager().authenticate(token);
	}

@Override
protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
		Authentication authResult) throws IOException, ServletException {
	// TODO Auto-generated method stub
	System.out.println("success");
	super.successfulAuthentication(request, response, chain, authResult);
	chain.doFilter(request, response);
}
}
