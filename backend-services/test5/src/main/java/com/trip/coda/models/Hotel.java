package com.trip.coda.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="hotels")
@EntityListeners(AuditingEntityListener.class)
public class Hotel {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long hotelId;

	@Column(name="hotel_name")
	private String hotelName;

	@Column(name="hotel_place")
	private String hotelPlace;

	@Column(name="price")
	private long hotelPrice;
	
	
	@Column(name="hotel_description")
	private String hotelDescription;
	
	
	@Column(name="hotel_image")
	private String hotelImage;


	public long getHotelId() {
		return hotelId;
	}


	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}


	public String getHotelName() {
		return hotelName;
	}


	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}


	public String getHotelPlace() {
		return hotelPlace;
	}


	public void setHotelPlace(String hotelPlace) {
		this.hotelPlace = hotelPlace;
	}


	public long getHotelPrice() {
		return hotelPrice;
	}


	public void setHotelPrice(long hotelPrice) {
		this.hotelPrice = hotelPrice;
	}


	public String getHotelDescription() {
		return hotelDescription;
	}


	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}


	public String getHotelImage() {
		return hotelImage;
	}


	public void setHotelImage(String hotelImage) {
		this.hotelImage = hotelImage;
	}



	
	
 
	

	

}
