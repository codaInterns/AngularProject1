package com.trip.coda.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.mapper.UserMapper;
import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;
import com.trip.coda.repo.UserRepo;



@Service
public class LoginService{

	
	
	@Autowired
	private UserRepo repo; 
	
	
		public List<User> getAllUsers(){
			return repo.findAll();
		}
		
		public Boolean login(AccountInput opt){
			User user=repo.login(opt.getUserEmail(),opt.getUserPassword());
			return (user!=null);
			
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
				ex.printStackTrace();
				
				return false;
			}
			
		}
}
