package pathing;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class Vertex implements Comparable<Vertex> {
	private String name;
	private HashSet<String> neighbors;
	private HashMap<String,Double> walkTimes;
	private ArrayList<Double> waitTimes;
	private double satisfaction;
	private int duration;
	private boolean tookBreak;
	
	Vertex(String n, HashMap<String,Double> walkT) {
		// configure vertex
		name = n;
		neighbors = new HashSet<String>(walkT.keySet());
		walkTimes = walkT;
		tookBreak = false;
	}
	
	Vertex(Vertex v) {
		name = v.getName();
		neighbors = v.getNeighbors();
		walkTimes = v.getWalkTimes();
		waitTimes = v.getWaitTimes();
		satisfaction = new Double(v.getSatisfaction());
		duration = v.getDuration();
		tookBreak = v.hasTakenBreak();
	}
	
	Vertex(String n, Vertex v) {
		name = n;
		neighbors = v.getNeighbors();
		walkTimes = v.getWalkTimes();
		waitTimes = v.getWaitTimes();
		satisfaction = new Double(v.getSatisfaction());
		duration = v.getDuration();
		tookBreak = v.hasTakenBreak();
	}
	
	public void takeBreak() {
		tookBreak = true;
	}
	
	public boolean hasTakenBreak() {
		return tookBreak;
	}
	
	void setWaitTimes(ArrayList<Double> waitT) {
		waitTimes = waitT;
	}
	
	void setSatisfaction(double s) {
		satisfaction = s;
	}
	
	// unused
	double satisfy() {
		double oldSatisfaction = satisfaction;
		if (satisfaction >= 6) {
			satisfaction *= 0.75;
		} else {
			satisfaction *= 0.5;
		}
		return oldSatisfaction;
	}
	
	double getSatisfaction() {
		return satisfaction;
	}
	
	void setDuration(int d) {
		duration = d;
	}
	
	int getDuration() {
		return duration;
	}
	
	String getName() {
		return name;
	}
	
	HashSet<String> getNeighbors() {
		return neighbors;
	}
	
	double getWalkTimeTo(String v) {
		if (neighbors.contains(v)) {
			return walkTimes.get(v);
		}
		return -1;
	}
	
	void setWalkTimes(HashMap<String,Double> walkT) {
		neighbors = new HashSet<String>(walkT.keySet());
		walkTimes = walkT;
	}
	
	HashMap<String,Double> getWalkTimes() {
		return walkTimes;
	}
	
	double getWaitTimeAt(double minutes) {
		int index = (int) minutes / 5;
		if (waitTimes == null || index < 0 || index >= waitTimes.size()) {
			return -1;
		}
		return waitTimes.get(index);
	}
	
	ArrayList<Double> getWaitTimes() {
		return waitTimes;
	}
	
	boolean isOpen(double minutes) {
		return getWaitTimeAt(minutes) != -1;
	}
	
	@Override
	public int compareTo(Vertex other) {
		return name.compareTo(other.getName());
	}
	
	@Override
	public String toString() {
		String s = name + ":\n" + "	satisfaction: " + satisfaction + "\n"
				+ "	duration: " + duration + "\n";
		
		for (String n : walkTimes.keySet()) {
			s += "	(" + n + "," + walkTimes.get(n) + ")\n";
		}
		
		return s;
	}
}
