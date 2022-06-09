package com.example.restservicecors;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pathing.*;
@RestController
public class GreetingController {

	class NewPair implements Comparable<NewPair>{
		private Ride r;
		private int order;

		NewPair(Ride ride, int order){
			r = ride;
			this.order = order;
		}

		public Ride getR() {
			return r;
		}

		@Override
		public int compareTo(NewPair o) {
			if(this.order > o.order){
				return 1;
			}
			else if(this.order <  o.order){
				return -1;
			}
			return 0;
		}

		public String toString(){
			return r.getName();
		}
	}


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
			System.out.println(ride);
		}
		Map<String, String> ridesMap = initializeRides();

//		db.put("mustGo", rides);
		Pathfinding p = new Pathfinding(rides, ridesMap);
		ArrayList<Pair<String,Integer>> path = p.findOptimalPath("entrance");
		System.out.println("path after algo");
		for(Pair currP : path){
			System.out.println(currP);
		}
		Map<String, Integer> rideToOrder = new HashMap<>();
		Map<String, String> closest = findClosest();
		int order = 0;
		for(Pair<String,Integer> pair : path){
			String backString = pair.getX().replaceAll("[^A-Za-z]+", "");
			if(!rideToOrder.containsKey(backString)){
				rideToOrder.put(backString, order);
				order++;
			}
			else{
				if(closest.containsKey(backString)){
					rideToOrder.put(closest.get(backString), order);
					order++;
				}

			}
		}
		List<NewPair> sortedPath = new ArrayList<>();

		for(Ride ride : rides){
			String backString = ridesMap.get(ride.getName());
			if(rideToOrder.containsKey(backString)) {
				NewPair pair = new NewPair(ride, rideToOrder.get(backString));

				sortedPath.add(pair);
			}
		}
		Collections.sort(sortedPath);
		System.out.println("Final Path is ");
		List<Ride> res = new ArrayList<>();
		for(NewPair np : sortedPath){
			res.add(np.getR());
		}
		for(Ride r : res){
			System.out.println(r.getName());
		}

		return res;
	}


	@GetMapping("/greeting-javaconfig")
	public Greeting greetingWithJavaconfig(@RequestParam(required = false, defaultValue = "World") String name) {
		System.out.println("==== in greeting ====");
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

	Map<String, String> initializeRides(){
		Map<String, String> res = new HashMap<>();

		res.put("Golden Zephyr", "goldenzephyr");
		res.put("Guardians of the Galaxy", "guardiansofthegalaxy");
		res.put("Incredicoaster", "incredicoaster");
		res.put("Mater's Graveyard JamBOOree", "matersjunkyardjamboree");
		res.put("Monsters, Inc. Mike & Sulley to the Rescue!", "monstersinc");
		res.put("Pixar Pal-A-Round – Swinging", "pixarpalaround");
		res.put("Radiator Springs Racers", "radiatorspringsracers");
		res.put("Soarin' Over California", "soarin");
		res.put("The Little Mermaid ~ Ariel's Undersea Adventure", "thelittlemermaid");
		res.put("Toy Story Midway Mania!", "midwaymania");

		res.put("Goofy's Sky School", "goofysskyschool");
		res.put("Luigi's Rollickin' Roadsters", "luigisrollickinroadsters");
		res.put("Jumpin' Jellyfish", "jumpinjellyfish");





		return res;

	}

	Map<String, String> findClosest(){
		Map<String, String> map = new HashMap<>();

		map.put("pixarpalaround", "Silly Symphony Swings");
		map.put("goldenzephyr", "Goofy's Sky School");
		map.put("midwaymania", "Jessie's Critter Carousel");
		map.put("incredicoaster", "Luigi's Rollickin' Roadsters");
		map.put("thelittlemermaid", "Jumpin' Jellyfish");

		return map;

	}

}
