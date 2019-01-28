package com.trip.coda.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.trip.coda.validators.ValidEmail;
import com.trip.coda.validators.ValidPassword;


@Entity
@Table(name="users")
public class User {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int userId;	
@Column(name="email")
@ValidEmail
private String userEmail;
@Column(name="password")
@ValidPassword
private String userPassword;

public int getId() {
	return userId;
}
public void setId(int id) {
	this.userId = id;
}

public String getEmail() {
	return userEmail;
}
public void setEmail(String email) {
	this.userEmail = email;
}
public String getPassword() {
	return userPassword;
}
public void setPassword(String password) {
	this.userPassword = password;
}
}
