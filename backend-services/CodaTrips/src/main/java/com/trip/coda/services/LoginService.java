package com.trip.coda.services;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trip.coda.mapper.UserMapper;
import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;



@Service
public class LoginService{

	
	
	@Autowired
	private UserMapper mapper; 
	
	
		public List<User> GetAllUsers(){
			return mapper.findAll();
		}
		
		public Boolean login(AccountInput opt){
			User user=mapper.login(opt);
			if(user==null)return false;
			else return true;
		}


		
		public Boolean postUser(AccountInput opt) {
			User user1=new User();
			try {
				user1.setUserEmail(opt.getUserEmail());
				user1.setUserPassword(opt.getUserPassword());
				mapper.save(user1);
				return true;
			}
			catch(Exception ex)
			{
				ex.printStackTrace();
				return false;
			}
			
		}
}
