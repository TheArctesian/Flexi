package main

import (
    "github.com/gofiber/fiber/v2"
)

func main() {
    app := fiber.New()
  
    app.Get("/", func(c *fiber.Ctx) error {
        return c.JSON(&fiber.Map{"test" : {
         "Name": "Selected well being",
         "Teacher": "Name",
         "Link": "zoomlink",
         "Place": "1st floor gym",
         "Participants": ["小明", "Alex Okita", "Jamie Hooper"]
       },})
    })
  
    app.Listen(":6000")
}
