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
@Table(name="booking")
@EntityListeners(AuditingEntityListener.class)
public class Book {

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private long book_id;

@Column(name="name")
private String name;

@Column(name="source")
private String source;

@Column(name="destination")
private String destination;

@Column(name="departure")
private String departure;

@Column(name="user_id")
private String user_id;

public String getUser_id() {
	return user_id;
}
public void setUser_id(String user_id) {
	this.user_id=user_id;
}
public long getBook_id() {
	return book_id;
}

public void setBook_id(long book_id) {
	this.book_id = book_id;
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
