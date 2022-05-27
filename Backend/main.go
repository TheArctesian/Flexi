package main

import (
    "github.com/gofiber/fiber/v2"
)
// Student
// Teacher

func setupRoutes(app *fiber.App) {
    app.get("/api/schedule:year")
    app.get("/api/schedule:week")
    app.get("/api/schedule:date")
    app.get("/api/student/:year")
}
func main() {
    app := fiber.New()
    setupRoutes(app)   
    app.Listen(":6000")
}