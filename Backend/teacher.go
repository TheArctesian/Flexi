/*
Teacher Data Struct
------------------
Name: string;
Room: int;
Email: string;
Picture: string; This wll just pont to and endpoint on the server where the img i stored
Zoom: string;
Description: string;
*/

import (
	"github.com/gofiber/fiber"
)

type student struct {
	name    string
	room    int
	email   string
	zoom    string
	picture string
	picture string
}

func getTeacher(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherRoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherEmail(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherZoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getTeacherDescription(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func putTeacher(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherRoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherEmail(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherZoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putTeacherDescription(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func postTeacher(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherRoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherEmail(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherZoom(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postTeacherDescription(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func deleteTeacher(c *fiber.Ctx) {
	c.Send("The Arctesian")
}