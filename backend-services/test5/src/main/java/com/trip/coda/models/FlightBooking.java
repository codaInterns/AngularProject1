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
@Table(name="BookingTable")
@EntityListeners(AuditingEntityListener.class)
public class FlightBooking {

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long bookingId;

@Column(name="name")
private String flightName;

@Column(name="source")
private String source;

@Column(name="destination")
private String destination;

@Column(name="departure")
private String departure;

@Column(name="user_id")
private String userId;


public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId=userId;
}
public long getBookingId() {
	return this.bookingId;
}

public void setBookingId(long bookingId) {
	this.bookingId = bookingId;
}

public String getName() {
	return flightName;
}

public void setName(String name) {
	this.flightName = flightName;
}

public String getSource() {
	return source;
}

public void setSource(String source) {
	this.source = source;
}

public String getDestination() {
	return destination;
}

public void setDestination(String destination) {
	this.destination = destination;
}

public String getDeparture() {
	return departure;
}

public void setDeparture(String departure) {
	this.departure = departure;
}



}
