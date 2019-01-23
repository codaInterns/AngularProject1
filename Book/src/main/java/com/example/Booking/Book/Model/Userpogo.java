package com.example.Booking.Book.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User_booked")
public class Userpogo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer uid;
	
	@Column(name="name")
	private String name;
	
	@Column(name="Flight_name")
	private String Flight_name;
	
	@Column(name="Seats_booked")
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

	public String getFlight_name() {
		return Flight_name;
	}

	public void setFlight_name(String flight_name) {
		Flight_name = flight_name;
	}

	public int getSeats_booked() {
		return Seats_booked;
	}

	public void setSeats_booked(int seats_booked) {
		Seats_booked = seats_booked;
	}

}
