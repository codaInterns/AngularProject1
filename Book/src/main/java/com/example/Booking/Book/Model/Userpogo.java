package com.example.Booking.Book.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_booked")
public class Userpogo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer uid;
	
	@Column(name="name")
	private String name;
	
	@Column(name="flight_id")
	private String Flight_id;
	
	@Column(name="flight_name")
	private String flight_name;
	
	public String getFlight_name() {
		return flight_name;
	}

	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}

	public String getFlight_id() {
		return Flight_id;
	}

	public void setFlight_id(String flight_id) {
		Flight_id = flight_id;
	}

	@Column(name="seats_booked")
	private int Seats_booked;

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public int getSeats_booked() {
		return Seats_booked;
	}

	public void setSeats_booked(int seats_booked) {
		Seats_booked = seats_booked;
	}

}
