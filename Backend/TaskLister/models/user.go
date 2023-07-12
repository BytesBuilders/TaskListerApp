package models

import "proyect_modules/database"

type User struct {
	Id       int64  `json:"id"`
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func MigrateUser() {
	database.Database.AutoMigrate(User{})
}