/* 
Student Data Struct 
------------------
Name: string; 
Advisory: int;
Email: string;
Picture: string; This wll just pont to and endpoint on the server where the img i stored
FavoriteTeacher: string[];

*/



package student

import (
	"github.com/gofiber/fiber"
)


    
func getStudent(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func getStudentName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getStudentAdvisory(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getStudentPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func getStudentTeachers(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func putStudent(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func putStudentName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putStudentAdvisory(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putStudentPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func putStudentTeachers(c *fiber.Ctx) {
	c.Send("The Arctesian")
}


func postStudent(c *fiber.Ctx) {
	c.Send("The Arctesian")
}

func postStudentName(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postStudentAdvisory(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postStudentPicture(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func postStudentTeachers(c *fiber.Ctx) {
	c.Send("The Arctesian")
}
func deleteStudent(c *fiber.Ctx) {
	c.Send("Delete")
}
