package migrate

import (
	"solace/backend/app/models"
)

func main() {
	models.GetDB().AutoMigrate(&models.Favorite{})
}
