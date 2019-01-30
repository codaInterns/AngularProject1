package com.test5.test5.controllers;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test5.test5.models.UserDB;
import com.test5.test5.models.options;
import com.test5.test5.repo.UserInterface;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class LoginController {
    @Autowired
	private UserInterface repo;
	private options opt;
    
	@PostMapping(path = "/users/" , consumes = "application/json" , produces = "application/json")
    public Boolean login(@RequestBody options opt){
    	List<UserDB> list1= repo.findAll();
    	Iterator<UserDB> listIterator=list1.iterator();
    	while(listIterator.hasNext()) {
    	     UserDB user=listIterator.next();
    	     if(user.getEmail().equals(opt.getEmail()) && user.getPassword().equals(opt.getPassword()) ){
    	    	 return true;
    	     }
    	    
    	}
    	return false;
    }
	@PostMapping(path = "/register/" , consumes = "application/json" , produces = "application/json")
	public Boolean postUser(@RequestBody options opt) {
		UserDB user1=new UserDB();
		try {
			user1.setEmail(opt.getEmail());
			user1.setPassword(opt.getPassword());
			repo.save(user1);
			return true;
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return false;
		}
		
	}
}
