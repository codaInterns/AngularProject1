package repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import model.Flight;

public interface FlightRepository extends CrudRepository<Flight, Long> {
	List<Flight> findFlights(String source,String departure,String destination);
}