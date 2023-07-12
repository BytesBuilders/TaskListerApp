package database

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var dsn = "root:admin@tcp(localhost:3308)/takslister?charset=utf8mb4&parseTime=True&loc=Local"
var Database = func() (db *gorm.DB) {
	if db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{}); err != nil {
		fmt.Println("Error en Conexion de DB", err)
		panic(err)
	} else {
		fmt.Println("Conexion DB exitosa")
		return db
	}
}()