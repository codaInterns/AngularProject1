package com.trip.coda.services;




import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.trip.coda.mapper.UserMapper;
import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;
import com.trip.coda.repo.UserRepo;


@Service
public class JwtService {


		@Autowired
		private UserRepo repo;
		
		
	    public String login(AccountInput opt){
		
			User user=repo.login(opt.getUserEmail(),opt.getUserPassword());
	    	    	 try {
	    	    		 	ObjectId Oid = user.getUserId();
	    	    		 	int id=Oid.getCounter();
	    	    		    Algorithm algorithm = Algorithm.HMAC256("secret");
	    	    		    return JWT.create().withJWTId(String.valueOf(id))
	    	    		        .withIssuer("auth0")
	    	    		        .sign(algorithm);
	    	    		    
	    	    		   
	    	    		    
	    	    	 } catch (JWTCreationException exception){
	    	    		 
	    	    		 return null;
	    	    		}
	    	     
	    	    
    	
	    	
	    	
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
