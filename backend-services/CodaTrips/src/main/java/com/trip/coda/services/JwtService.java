package com.trip.coda.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;

@Service
public class JwtService {

	    @Autowired
		private com.trip.coda.repo.UserInterface repo;
		
		
		
	    public String login(AccountInput opt){
		
			
	    	List<User> list1= repo.findAll();
	    	Iterator<User> listIterator=list1.iterator();
	    	while(listIterator.hasNext()) {
	    	     User user=listIterator.next();
	    	     if(user.getUserEmail().equals(opt.getUserEmail()) && user.getUserPassword().equals(opt.getUserPassword()) ){
	    	    	 try {
	    	    		 	int id = user.getUserId();
	    	    		 
	    	    		    Algorithm algorithm = Algorithm.HMAC256("secret");
	    	    		    return JWT.create().withJWTId(String.valueOf(id))
	    	    		        .withIssuer("auth0")
	    	    		        .sign(algorithm);
	    	    		    
	    	    		   
	    	    		    
	    	    	 } catch (JWTCreationException exception){
	    	    		 
	    	    		    
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
