package main

import (
	"github.com/gofiber/fiber/v2"
)

// Student
// Teacher

func setupRoutes(app *fiber.App) {
	app.Get("/api/schedule:year")
	app.Get("/api/schedule:week")
	app.Get("/api/schedule:date")
	app.Get("/api/student/:year")
}
func main() {
	app := fiber.New()
	setupRoutes(app)
	app.Listen(":6000")
}
