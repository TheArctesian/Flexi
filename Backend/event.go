/*
Flexi Data Struct
------------------
Name: string;
Teacher: string; # maybe a hotlink to the teachers page
Room: int;
Zoom: string;
Date: string; # unixTime
YearGroup: string;
Participants: string[];
*/
import (
	"github.com/gofiber/fiber"
)

type event struct {
	name 			string
	teacher			string
	room 			int
	zoom 			int
	yearGroup 		string
	participants 	string[];
}


func getEventName(c *fiber.Ctx) {
	c.Send("This is a big obj")
}

func getEventTeacher(c *fiber.Ctx) {
	c.Send("Teacher name")
}
func getEventRoom(c *fiber.Ctx) {
	c.Send("Teacher room")
}
func getEventZoom(c *fiber.Ctx) {
	c.Send("Teacher zoom")
}

func getEventYearGroup(c *fiber.Ctx) {
	c.Send("Yr grp")
}

func getEventParticipants(c *fiber.Ctx) {
	c.Send("Some teachers")
}


func putEventName(c *fiber.Ctx) {
	c.Send("This is a big obj")
}

func putEventTeacher(c *fiber.Ctx) {
	c.Send("Teacher name")
}
func putEventRoom(c *fiber.Ctx) {
	c.Send("Teacher room")
}
func putEventZoom(c *fiber.Ctx) {
	c.Send("Teacher zoom")
}

func putEventYearGroup(c *fiber.Ctx) {
	c.Send("Yr grp")
}

func putEventParticipants(c *fiber.Ctx) {
	c.Send("Some teachers")
}

func setEvent(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getEvent(c *fiber.Ctx) {
	c.Send("etje")
}
func deleteEvent(c *fiber.Ctx) {
	c.Send("rm -rdf")
}
