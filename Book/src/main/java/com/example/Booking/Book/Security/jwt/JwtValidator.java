package com.example.Booking.Book.Security.jwt;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtValidator  {
	String secret="ssncoda";
	public jwtUser validate(String token) {
		jwtUser user=new jwtUser();
		try {
			System.out.println(token);
		Claims body=Jwts.parser()
				.setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody();
		
		user.setUserName(body.getSubject());
		user.setId(Long.parseLong((String)body.get("userId")));
		user.setRole((String)body.get("role"));
		}catch(Exception e)
		{
			System.out.println("error");
			e.printStackTrace();
		}
		return user;
	}
}
