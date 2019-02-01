package com.trip.coda.repo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.trip.coda.models.Flight;

public interface FlightRepo extends MongoRepository<Flight,ObjectId>{

	@Query("{source:?0,destination:?1}")
	List<Flight> getFlights(String source,String destination);

	
	
	
	

	
	
}
