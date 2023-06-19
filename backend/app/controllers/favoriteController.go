package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"solace/backend/app/models"
	u "solace/backend/utils"
	"github.com/gorilla/mux"
)

// Get all the favorites in the favorites table
func GetFavorites(w http.ResponseWriter, r *http.Request) {
	resp := u.Message(true, "success")
	favorites := models.GetFavorites()
	if favorites == nil {
		u.Respond(w, u.Message(false, "No favorites found"))
		return
	}
	resp["data"] = favorites
	u.Respond(w, resp)
	return
}

func CreateFavorite(w http.ResponseWriter, r *http.Request) {
	favorite:= &models.Favorite{}

	err := json.NewDecoder(r.Body).Decode(&favorite)
	
	if err != nil {
		u.Respond(w, u.Message(false, "Error while decoding request body"))
		return
	}
	defer r.Body.Close()

	resp := favorite.Create()
	u.Respond(w, resp)
}

func DeleteFavorite(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	var favorite models.Favorite
	id, err := strconv.Atoi(params["mal_id"])
	if err != nil {
		u.Respond(w, u.Message(false, "There was an error in your request"))
		return
	}

	err = models.GetFavoriteForUpdateOrDelete(id, &favorite)
	if err != nil {
		u.Respond(w, u.Message(false, "Favorite not found"))
		return
	}

	err = models.DeleteFavorite(&favorite)
	if err != nil {
		u.Respond(w, u.Message(false, "Could not delete the record"))
		return
	}
	u.Respond(w, u.Message(true, "Favorite has been deleted successfully"))
	return
}

type Person struct {
	Name string
	Age  int
}
