package com.example.Booking.Book.Security.jwt;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class JwtAuthenticationToken extends UsernamePasswordAuthenticationToken{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	String token;
	public JwtAuthenticationToken(String token) {
		super(null,null);
		this.token=token;
		// TODO Auto-generated constructor stub
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
 @Override
public Object getCredentials() {
	// TODO Auto-generated method stub
	return null;
}
 @Override
public Object getPrincipal() {
	// TODO Auto-generated method stub
	return null;
 }
}
