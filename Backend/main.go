package main

import (
	"github.com/gofiber/fiber/v2"
	"teacher"
	"student"
	"schedule"
	"event"
)
config := fiber.Config{
  ServerHeader: "Flexi Server", // add custom server header
}


func setupRoutes(app *fiber.App) {
	// Schedule Calls
	app.Get("/api/schedule/day", getFlexiDate)
	app.Get("/api/schedule/week", getFlexiWeek)
	app.Get("/api/schedule/yr", getFlexiYr)
	//app.Get("/api/schedule/Year7")
	//app.Get("/api/schedule/Year8")
	//app.Get("/api/schedule/Year9")
	//app.Get("/api/schedule/Year10")
	//app.Get("/api/schedule/Year11")
	//app.Get("/api/schedule/Year12")
	//app.Get("/api/schedule/Year13")
	
	// Get Events
	app.Get("api/event/", getEvent)
	app.Get("api/event/name", getEventName)
	app.Get("api/event/teacher", getEventTeacher)
	app.Get("api/event/room", getEventRoom)
	app.Get("api/event/zoom", getEventZoom)
	app.Get("api/event/yearGroup", getEventYearGroup)
	app.Get("api/event/participants", getEventParticipants)

	// Get Teacher 
	app.Get("api/teacher", getTeacher)
	app.Get("api/teacher/description", getTeacherDescription)
	app.Get("api/teacher/email", getTeacherEmail)
	app.Get("api/teacher/name", getTeacherName)
	app.Get("api/teacher/picture", getTeacherPicture)
	app.Get("api/teacher/room", getTeacherRoom)
	app.Get("api/teacher/zoom", getTeacherZoom)
}
func main() {
	app := fiber.New(config)
	setupRoutes(app)
	app.Listen(":6000")
}
