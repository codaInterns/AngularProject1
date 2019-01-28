package com.trip.coda.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.trip.coda.models.Flight;

public interface FlightsInterface extends JpaRepository<Flight, Long> {

}
