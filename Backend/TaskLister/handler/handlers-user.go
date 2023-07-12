package handler

import (
	"fmt"
	"net/http"
)

func CreateUser(rw http.ResponseWriter,r *http.Request){
	fmt.Fprintln(rw,"Crear Usuario")
}

func GetUser(rw http.ResponseWriter,r *http.Request){
	fmt.Fprintln(rw,"Obtener Usuario")
}

func UpdateUser(rw http.ResponseWriter,r *http.Request){
	fmt.Fprintln(rw,"Actualizar Usuario")
}

func DeleteUser(rw http.ResponseWriter,r *http.Request){
	fmt.Fprintln(rw,"Borrar Usuario")
}