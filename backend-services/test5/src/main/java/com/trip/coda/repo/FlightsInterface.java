package com.trip.coda.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.test5.test5.models.flights;



public interface FlightsInterface extends JpaRepository<flights, Long> {

}
