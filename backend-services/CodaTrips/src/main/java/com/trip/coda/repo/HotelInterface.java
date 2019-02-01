package com.trip.coda.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.trip.coda.models.Hotel;

@Repository
public interface HotelInterface extends MongoRepository<Hotel, Integer>{


}
