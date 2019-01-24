package com.sampleapp;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class Remote {
	
	 @Autowired
	 private Respository db;

	
	


		@GetMapping("/regsiter/{username}/{password}")
		public boolean method(@PathVariable(value="username")String username,@PathVariable(value="password") String password)
		{
			System.out.println(username);
			System.out.println(password);
			//usermodel user= new usermodel();
			//user.setUser_name(username);
			//user.setPassword(password);
			//System.out.println(user.getPassword());
			//db.save(user);
			
			System.out.println("hello");
			List<usermodel> users = db.findAll();
			
			Iterator<usermodel> listIterator=users.iterator();
	    	while(listIterator.hasNext()) {
	    	     usermodel userdetail=listIterator.next();
	    	     System.out.println(userdetail.getUser_name());
	    	     if(userdetail.getUser_name().equals(username) && userdetail.getPassword().equals(password) ){
	    	    	 return true;
	    	     }
	    	    
	    	}
	    	return false;
		
			
		}



}
