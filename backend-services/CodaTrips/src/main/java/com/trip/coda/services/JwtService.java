package com.trip.coda.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.trip.coda.repo.UserInterface;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;

public class JwtService {

	    @Autowired
		private com.trip.coda.repo.UserInterface repo;
		private AccountInput opt;
		
		
	    public String login(AccountInput opt){
			//System.out.println(opt.getEmail()+" "+opt.getPassword());
			
			
	    	List<User> list1= repo.findAll();
	    	Iterator<User> listIterator=list1.iterator();
	    	while(listIterator.hasNext()) {
	    	     User user=listIterator.next();
	    	     if(user.getEmail().equals(opt.getEmail()) && user.getPassword().equals(opt.getPassword()) ){
	    	    	 try {
	    	    		 	int id = user.getId();
	    	    		 	System.out.println(id);
	    	    		    Algorithm algorithm = Algorithm.HMAC256("secret");
	    	    		    String token = JWT.create().withJWTId(String.valueOf(id))
	    	    		        .withIssuer("auth0")
	    	    		        .sign(algorithm);
	    	    		    
	    	    		    System.out.println(token);    
	    	    		    return token;
	    	    	 } catch (JWTCreationException exception){
	    	    		 	System.out.println("INVALID JWT CREATION");
	    	    		    //Invalid Signing configuration / Couldn't convert Claims.
	    	    		}
	    	     }
	    	    
	    	}
	    	System.out.println("Not in db");
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
