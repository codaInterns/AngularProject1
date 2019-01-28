package com.trip.coda.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trip.coda.models.BookingInput;
import com.trip.coda.models.FlightBooking;




public interface BookingInterface extends JpaRepository<FlightBooking,Integer > {

}
