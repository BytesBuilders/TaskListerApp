package main

import (
	"fmt"
	"log"
	"net/http"
	"proyect_modules/handler"
	"proyect_modules/models"
	//"time"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("--Bienvenido a TaskLister--")
	
	//time.Sleep(10 * time.Second)

	models.MigrateUser()

	mux := mux.NewRouter()
	
	//Endpoints
	mux.HandleFunc("/api/user/{id:[0-9]+}",handler.GetUser).Methods("GET") //Obtener Usuario
	mux.HandleFunc("/api/user/",handler.CreateUser).Methods("POST") //Crear Usuario
	mux.HandleFunc("/api/user/{id:[0-9]+}",handler.UpdateUser).Methods("PUT") //Editar Usuario
	mux.HandleFunc("/api/user/{id:[0-9]+}",handler.DeleteUser).Methods("DELETE") //Eliminar Usuario

	log.Fatal(http.ListenAndServe(":3000", mux))
}