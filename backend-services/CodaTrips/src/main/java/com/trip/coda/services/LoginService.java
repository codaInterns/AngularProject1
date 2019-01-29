package com.trip.coda.services;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;
import com.trip.coda.repo.UserInterface;



public class LoginService {

	 @Autowired
		private UserInterface repo;
		
		public Boolean login(AccountInput opt){
	    	List<User> list1= repo.findAll();
	    	Iterator<User> listIterator=list1.iterator();
	    	while(listIterator.hasNext()) {
	    	     User user=listIterator.next();
	    	     if(user.getEmail().equals(opt.getEmail()) && user.getPassword().equals(opt.getPassword()) ){
	    	    	 return true;
	    	     }
	    	    
	    	}
	    	return false;
	    }
		
		public Boolean postUser(AccountInput opt) {
			User user1=new User();
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
