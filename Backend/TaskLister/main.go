package main

import (
	"fmt"
	"proyect_modules/database"
)

func Conection(){
	database.Connect()
}

func main() {
	fmt.Println("Hola")
	Conection()
}