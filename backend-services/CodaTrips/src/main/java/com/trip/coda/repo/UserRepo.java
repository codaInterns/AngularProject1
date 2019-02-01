package com.trip.coda.repo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.trip.coda.models.AccountInput;
import com.trip.coda.models.User;

public interface UserRepo extends MongoRepository<User, ObjectId>{

	
	@Query("{userEmail:?0,userPassword:?1}")
	User login(String userEmail, String userPassword);

}
