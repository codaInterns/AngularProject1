package com.trip.coda.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.trip.coda.models.AccountInput;
import com.trip.coda.services.JwtService;



@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class JwtController {
   
  
	JwtService jwtservice;
	@PostMapping(path = "/jwt/" , consumes = "application/json")
    public String login(@RequestBody AccountInput opt){
		
	    return jwtservice.login(opt);
    }
	
}
