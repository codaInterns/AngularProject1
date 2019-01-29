package com.trip.coda.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.trip.coda.models.AccountInput;
import com.trip.coda.services.LoginService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class LoginController {
   
	LoginService loginservice;
	
	@PostMapping(path = "/users/" , consumes = "application/json" , produces = "application/json")
    public Boolean login(@RequestBody AccountInput opt){
     
		return loginservice.login(opt);
    }
	@PostMapping(path = "/register/" , consumes = "application/json" , produces = "application/json")
	public Boolean postUser(@RequestBody AccountInput opt) {
		
		return loginservice.postUser(opt);
	}
}
