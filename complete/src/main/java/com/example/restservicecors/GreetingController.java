package com.example.restservicecors;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class GreetingController {

	private static final String template = "Jumpin' Jellyfish -> Luigi's Rollickin' Roadsters -> Mater's Graveyard JamBOOree";
	private Map<String, Ride> db = new HashMap<String, Ride>(){{
		put("1", new Ride("1", "Jumpin' Jellyfish"));
	}};

	private final AtomicLong counter = new AtomicLong();

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("==== get greeting ====");
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}


	@GetMapping("/rides")
	public Collection<Ride> get(){
		return db.values();
	}

	@DeleteMapping("/rides/{id}")
	public void delete(@PathVariable String id){
		Ride ride = db.remove(id);
		if(ride == null){
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/rides")
	public Ride create(@RequestBody Ride ride){
		ride.setId(UUID.randomUUID().toString());
		db.put(ride.getId(), ride);
		System.out.println(ride.getName());
		return ride;
	}


	@GetMapping("/greeting-javaconfig")
	public Greeting greetingWithJavaconfig(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("==== in greeting ====");
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

}
