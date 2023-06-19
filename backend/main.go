package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"solace/backend/routes"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	_ "github.com/joho/godotenv/autoload"
)

func init() {
	c := cors.New(cors.Options{
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
	})

	port := os.Getenv("web_port")

	prefix := os.Getenv("prefix")
	fmt.Println("Server started at " + port + "...")
	r := mux.NewRouter()

	// Routes
	routes.ApiRoutes(prefix, r)
	handler := c.Handler(r)

	//Start Server on the port set in your .env file
	err := http.ListenAndServe(":"+port, handlers.LoggingHandler(os.Stdout, handler))
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	fmt.Println("App started successfully...")
}
