package com.trip.coda.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;

import com.trip.coda.models.Hotel;

@Mapper
public interface HotelMapper {

	@Select("select * from hotels")
	List<Hotel> findAll();

	@Select("select * from hotels where hotel_place=(#{hotelPlace})")
	List<Hotel> findHotelByLocation(Hotel hotel);

	@Insert("insert into hotels(hotelDescription,hotelImage,hotelName,hotelPlace,hotelPrice) values(#{hotelDescription},#{hotelImage},#{hotelName},#{hotelPlace},#{hotelPrice})")
	@SelectKey(statement="select  LAST_INSERT_ID() ", keyProperty="hotelId", before=false, resultType=int.class)
	void save(Hotel hotel);

}
