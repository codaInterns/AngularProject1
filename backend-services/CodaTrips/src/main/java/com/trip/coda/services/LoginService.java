package com.trip.coda.services;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;
import com.trip.coda.repo.UserInterface;


@Service
public class LoginService {

	 @Autowired
		private UserInterface repo;
		
		public Boolean login(AccountInput opt){
	    	List<User> list1= repo.findAll();
	    	Iterator<User> listIterator=list1.iterator();
	    	while(listIterator.hasNext()) {
	    	     User user=listIterator.next();
	    	     if(user.getUserEmail().equals(opt.getUserEmail()) && user.getUserPassword().equals(opt.getUserPassword()) ){
	    	    	 return true;
	    	     }
	    	    
	    	}
	    	return false;
	    }
		
		public Boolean postUser(AccountInput opt) {
			User user1=new User();
			try {
				user1.setUserEmail(opt.getUserEmail());
				user1.setUserPassword(opt.getUserPassword());
				repo.save(user1);
				return true;
			}
			catch(Exception ex)
			{
				
				return false;
			}
			
		}
}
