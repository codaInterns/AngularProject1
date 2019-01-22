package com.test5.test5;
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
public class flights {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long flights_id;

@Column(name="name ")
private String name;

@Column(name="source")
private String source;

@Column(name="destination")
private String destination;

@Column(name="departure")
private String departure;



public long getFlights_id() {
	return flights_id;
}

@Column(name="price")
private int price;

public int getPrice() {
	return price;
}

public void setPrice(int price) {
	this.price = price;
}


public void setFlights_id(long flights_id) {
	this.flights_id = flights_id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
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
