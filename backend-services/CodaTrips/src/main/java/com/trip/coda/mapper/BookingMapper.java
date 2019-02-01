package com.trip.coda.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.trip.coda.models.FlightBooking;

@Mapper
public interface BookingMapper {
	
	@Insert("insert into booking_table(departure,destination,name,source,user_id) values(#{departure},#{destination},#{flightName},#{source},#{userId})")
	void save(FlightBooking bookingObject);

}
