package com.example.Booking.Book.Security.jwt;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Component
public class JwtGenerator {

	public String generate(jwtUser user) {
		Claims claim=Jwts.claims()
				.setSubject(user.getUserName());
		claim.put("userId", String.valueOf(user.getId()));
		claim.put("role", user.getRole());
		return Jwts.builder()
		.setClaims(claim)
		.signWith(SignatureAlgorithm.HS256, "ssncoda")
		.compact();
	}

}
