package com.trip.coda.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trip.coda.models.User;

public interface UserInterface extends JpaRepository<User,Integer > {

}
