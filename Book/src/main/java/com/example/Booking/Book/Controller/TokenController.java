package com.example.Booking.Book.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Booking.Book.Security.jwt.JwtGenerator;
import com.example.Booking.Book.Security.jwt.jwtUser;

@RestController
@RequestMapping("/token")
public class TokenController {
	private JwtGenerator jwtGenerator;
	
	public TokenController(JwtGenerator juser) {
		this.jwtGenerator=jwtGenerator;
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping
	public String generate(@RequestBody jwtUser user)
	{
		JwtGenerator jwtGenerator=new JwtGenerator();
		return jwtGenerator.generate(user);
	}
	

}
