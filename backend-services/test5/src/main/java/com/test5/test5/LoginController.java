package com.test5.test5;

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
public class LoginController {
    @Autowired
	private UserInterface repo;
	/*@GetMapping("/get")
	public String Allid() {
		return "hi";
	}*/
	@GetMapping("/users/{email}/{password}")
    public Boolean login(@PathVariable(value="email")String email,@PathVariable(value="password") String passwd){
    	List<UserDB> list1= repo.findAll();
    	Iterator<UserDB> listIterator=list1.iterator();
    	while(listIterator.hasNext()) {
    	     UserDB user=listIterator.next();
    	     if(user.getEmail().equals(email) && user.getPassword().equals(passwd) ){
    	    	 return true;
    	     }
    	    
    	}
    	return false;
    }
}
