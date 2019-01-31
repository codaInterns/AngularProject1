package com.trip.coda.controllers;

import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;
import com.trip.coda.services.LoginService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class LoginController {
   
  @Autowired
  LoginService loginService;

  @PostMapping(path = "/login/", consumes = "application/json", produces = "application/json")
  public Boolean login(@RequestBody AccountInput opt) {
     
    return loginService.login(opt);
  }
  
  @PostMapping(path = "/register/", consumes = "application/json", produces = "application/json")
  public Boolean postUser(@RequestBody AccountInput opt) {
    return loginService.postUser(opt);
  }
  
  @GetMapping("/users")
  public String findAll() {
    List<User> userList = loginService.getAllUsers();
    User user1 = userList.get(0);
    return user1.getUserEmail();

  }
}
