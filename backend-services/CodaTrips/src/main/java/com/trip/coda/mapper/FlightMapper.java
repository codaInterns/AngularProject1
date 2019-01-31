package com.trip.coda.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.trip.coda.models.Flight;

@Mapper
public interface FlightMapper {

	@Select("select * from flights")
	List<Flight> findAll();

	
	@Select("select * from flights where source=(#{source}) and destination=(#{destination})")
	List<Flight> getFlights(Flight flight);

}
