package com.example.restservicecors;

public class Ride
{
    private String name;
    private String id;
    private int priority;
    public Ride(String id, String name, int priority) {
        this.name = name;
        this.id = id;
        this.priority = priority;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString(){
        return "{" + this.name + " " + this.priority + "}";
    }
}
