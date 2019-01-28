package com.trip.coda.filters;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.io.IOException;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

@Order(1)
public class AuthFilter implements Filter {
 
    @Override
    public void doFilter(
      ServletRequest request, 
      ServletResponse response, 
      FilterChain chain) throws IOException, ServletException {
  
        HttpServletRequest req = (HttpServletRequest) request;
       System.out.println("Filter working :)");
       System.out.println("TOKEN IS : "+req.getHeader("token"));
       String token=req.getHeader("token");
       if(token==null) {
    	   System.out.println("Invalid token");
	   		request.setAttribute("valid", "false");
	   		chain.doFilter(request, response);
	   		return;
       }
       System.out.println(token);
	   	try {
	   	    Algorithm algorithm = Algorithm.HMAC256("secret");
	   	    
	   	    JWTVerifier verifier = JWT.require(algorithm).withIssuer("auth0")
	   	            .build();
	   	    DecodedJWT jwt = verifier.verify(token);
	   	    
	   	    
	   	    request.setAttribute("userid", jwt.getId());
	   	    System.out.println("Valid token");
	   	    request.setAttribute("valid", "true");
	   	    chain.doFilter(request, response);
	   	    
	   	} catch (JWTVerificationException exception){
	   	    
	   		System.out.println("Invalid token");
	   		request.setAttribute("valid", "false");
	   		chain.doFilter(request, response);
	   	}
        
        
    }
 
    // other methods 
}
