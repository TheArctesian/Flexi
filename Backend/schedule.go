/*
In this situation OOP is a good idea

Schedule Data Struct
------------------
Date: string;
Week: string;
Year7Event: flexi[];
Year8Event: flexi[];
Year9Event: flexi[];
Year10Event: flexi[];
Year11Event: flexi[];
Year12Event: flexi[];
Year13Event: flexi[];
*/
package backend

import (
	"github.com/gofiber/fiber"
)

type schedule struct {
	ID primitive.ObjectID
	Week string
	Date string
	Year7Events flexi[]
	Year8Events flexi[]
	Year9Events flexi[]
	Year10Events flexi[]
	Year11Events flexi[]
	Year12Events flexi[]
	Year13Events flexi[]
}


func getFlexiDate(c *fiber.Ctx) {

	c.Send("This is a big obj")
}

func getFlexiWeek(c *fiber.Ctx) {

	c.Send("This is a big obj")
}

func getFlexiYr(c *fiber.Ctx) {

	c.Send("This is a big obj")
}
func postFlexiYr(c *fiber.Ctx) {

	c.Send("Need to set up db")
}
func putFlexiYr(c *fiber.Ctx) {

	c.Send("All Books")
}
func deleteFlexiYr(c *fiber.Ctx) {

	c.Send("All Books")
}
