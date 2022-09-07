#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
use std::env;
use std::fs;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/ping")]
fn ping() -> &'static str {
    "ping"
}

#[get("/Teacher")]
fn teacher() -> static json {
    let contents = fs::read_to_string("../static/Advisory.json")
        .expect("Should have been able to read the file");
}
fn main() {
    rocket::ignite().mount("/", routes![index, ping, teacher]).launch();
}

