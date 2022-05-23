package com.example.restservicecors;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pathing.*;
@RestController
public class GreetingController {

	private static final String template = "Jumpin' Jellyfish -> Luigi's Rollickin' Roadsters -> Mater's Graveyard JamBOOree";
	private Map<String, ArrayList<Ride>> db = new HashMap<String, ArrayList<Ride>>();

	private final AtomicLong counter = new AtomicLong();

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/greeting")
	public Greeting greeting(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("==== get greeting ====");
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}


	@GetMapping("/rides")
	public Collection<ArrayList<Ride>> get(){
		return db.values();
	}

	@DeleteMapping("/rides/{id}")
	public void delete(@PathVariable String id){
//		Ride ride = db.remove(id);
//		if(ride == null){
//			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//		}
	}

	@PostMapping("/rides")
	public List<Ride> create(@RequestBody ArrayList<Ride> rides){
		System.out.println("post request");
//		System.out.println(ride.getName());
//		System.out.println(ride.getId());
		for(Ride ride : rides){
			System.out.println(ride.getName());
		}
//		db.put("mustGo", rides);
		Pathfinding p = new Pathfinding();
		ArrayList<Pair<String,Integer>> path = p.findOptimalPath("entrance");
		System.out.println("Final path from Spring Boot is ");
		System.out.println(path);
		return new ArrayList<>();
	}


	@GetMapping("/greeting-javaconfig")
	public Greeting greetingWithJavaconfig(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("==== in greeting ====");
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

}
