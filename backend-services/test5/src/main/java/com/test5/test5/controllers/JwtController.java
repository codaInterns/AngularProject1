package com.test5.test5.controllers;

import java.security.Key;
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
import com.test5.test5.models.UserDB;
import com.test5.test5.models.options;
import com.test5.test5.repo.UserInterface;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class JwtController {
    @Autowired
	private UserInterface repo;
	private options opt;
    /*@GetMapping("/get")
	public String Allid() {
		return "hi";
	}*/
	@PostMapping(path = "/jwt/" , consumes = "application/json")
    public String login(@RequestBody options opt){
		System.out.println(opt.getEmail()+" "+opt.getPassword());
		
		
    	List<UserDB> list1= repo.findAll();
    	Iterator<UserDB> listIterator=list1.iterator();
    	while(listIterator.hasNext()) {
    	     UserDB user=listIterator.next();
    	     if(user.getEmail().equals(opt.getEmail()) && user.getPassword().equals(opt.getPassword()) ){
    	    	 try {
    	    		    Algorithm algorithm = Algorithm.HMAC256("secret");
    	    		    String token = JWT.create()
    	    		        .withIssuer("auth0")
    	    		        .sign(algorithm);
    	    		    System.out.println(token);    
    	    		    return token;
    	    	 } catch (JWTCreationException exception){
    	    		    //Invalid Signing configuration / Couldn't convert Claims.
    	    		}
    	     }
    	    
    	}
    	return null;
    }
	
}
class MyJwtToken{
	private String token;
	public MyJwtToken(String token) {
		this.token=token;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}
