package com.test5.test5.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.test5.test5.validators.ValidEmail;
import com.test5.test5.validators.ValidPassword;


@Entity
@Table(name="users")
public class UserDB {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int id;	
@Column(name="email")
@ValidEmail
private String email;
@Column(name="password")
@ValidPassword
private String password;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
