package com.trip.coda.controllers;

import java.security.Key;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import com.trip.coda.models.AccountInput;
import com.trip.coda.services.JwtService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

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
