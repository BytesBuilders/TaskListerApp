package models

import (
	"proyect_modules/database"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	Id       int64  `json:"id"`
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Tasks    []Task `gorm:"foreignKey:UserId"` // Relación uno a muchos con Task
}

func (u *User) BeforeSave(tx *gorm.DB) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)
	return nil
}

func MigrateUser() {
	database.Database.AutoMigrate(&User{})
}

func NewUser(name,lastname,email,password string) *User{
	user := &User{Name: name, Lastname: lastname, Email: email, Password: password}
	return user
}

/*
func (user *User) insert(){
	sql := "INSERT users SET username=?, password=?, email=?"
	result, _ := db.Exec(sql, user.Username, user.Password, user.Email)
	user.Id, _ = result.LastInsertId()
}

func (user *User) Save(){
	if user.Id == 0 {
		user.insert()
	}else{
		user.update()
	}
}
*/
