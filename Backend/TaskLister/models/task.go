package models

import "proyect_modules/database"

type Task struct {
	Id       int64  `json:"id"`
	UserId   int64  `json:"user_id"`
	Title    string `json:"title"`
	Date     string `json:"date"`
	Due_date string `json:"due_date"`
	Proirity int16  `json:"proirity"`
	Status   int16  `json:"status"`
	Complete bool   `json:"complete"`
	User     User   `gorm:"foreignKey:UserId"`
}

func MigrateTask() {
	database.Database.AutoMigrate(Task{})
}
