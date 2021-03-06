package com.test5.test5.models;

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

public class hotels {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long hotel_id;

	@Column(name="hotel_name")
	private String hotel_name;

	@Column(name="hotel_place")
	private String hotel_place;

	@Column(name="price")
	private long price;
	
	
	@Column(name="hotel_description")
	private String hotel_description;
	
	
	@Column(name="hotel_image")
	private String hotel_image;


	public long getHotel_id() {
		return hotel_id;
	}


	public void setHotel_id(long hotel_id) {
		this.hotel_id = hotel_id;
	}


	public String getHotel_name() {
		return hotel_name;
	}


	public void setHotel_name(String hotel_name) {
		this.hotel_name = hotel_name;
	}


	public String getHotel_place() {
		return hotel_place;
	}


	public void setHotel_place(String hotel_place) {
		this.hotel_place = hotel_place;
	}


	public long getPrice() {
		return price;
	}


	public void setPrice(long price) {
		this.price = price;
	}


	public String getHotel_description() {
		return hotel_description;
	}


	public void setHotel_description(String hotel_description) {
		this.hotel_description = hotel_description;
	}


	public String getHotel_image() {
		return hotel_image;
	}


	public void setHotel_image(String hotel_image) {
		this.hotel_image = hotel_image;
	}
	
	
	
 
	

	

}
