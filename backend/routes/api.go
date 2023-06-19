package routes

import (
	controllers "solace/backend/app/controllers"
	"github.com/gorilla/mux"
)

func ApiRoutes(prefix string, r *mux.Router) {
	s := r.PathPrefix(prefix).Subrouter()

	s.HandleFunc("/favorites", controllers.GetFavorites).Methods("GET")
	s.HandleFunc("/favorites", controllers.CreateFavorite).Methods("POST")
	s.HandleFunc("/favorites/{mal_id}", controllers.DeleteFavorite).Methods("DELETE")
}
