package com.trip.coda.models;
import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="flights")
@EntityListeners(AuditingEntityListener.class)
public class Flight {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long flightId;

@Column(name="name")
private String flightName;

@Column(name="source")
private String source;

@Column(name="destination")
private String destination;

@Column(name="departure")
private String departure;


public long getFlightId() {
	return flightId;
}

@Column(name="price")
private int flightPrice;


public String getFlightName() {
	return flightName;
}

public void setFlightName(String flightName) {
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

public int getFlightPrice() {
	return flightPrice;
}

public void setFlightPrice(int flightPrice) {
	this.flightPrice = flightPrice;
}

public void setFlightId(long flightId) {
	this.flightId = flightId;
}




}
