package com.trip.coda.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trip.coda.models.BookingInput;




public interface BookingInterface extends JpaRepository<BookingInput,Integer > {

}
