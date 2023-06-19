package models

import (
	"fmt"
	u "solace/backend/utils"
	"github.com/jinzhu/gorm"
)

type Favorite struct {
	gorm.Model
	Mal_id int
	Title string
	Image string
}

func (favorite *Favorite) Validate() (map[string]interface{}, bool) {

	if favorite.Mal_id == 0 {
		return u.Message(false, "Mal_id should be on the payload"), false
	}

	if favorite.Title == "" {
		return u.Message(false, "Title should be on the payload"), false
	}

	if favorite.Image == "" {
		return u.Message(false, "Image should be on the payload"), false
	}

	//All the required parameters are present
	return u.Message(true, "success"), true
}

func (favorite *Favorite) Create() map[string]interface{} {
	if resp, ok := favorite.Validate(); !ok {
		return resp
	}

	if err != nil {
		u.Message(false, "There was an internal error")
		return nil
	}

	GetDB().Create(favorite)

	resp := u.Message(true, "success")
	resp["favorite"] = favorite
	return resp
}

func GetFavorites() []*Favorite {
	favorites := make([]*Favorite, 0)
	err := GetDB().Find(&favorites).Error
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return favorites
}

func DeleteFavorite(favorite *Favorite) (err error) {
	err = GetDB().Delete(favorite).Error
	if err != nil {
		fmt.Println(err)
		return
	}
	return nil
}

func GetFavoriteForUpdateOrDelete(id int, favorite *Favorite) (err error) {
	if err := db.Where("mal_id = ?", id).First(&favorite).Error; err != nil {
		return err
	}
	return nil
}
