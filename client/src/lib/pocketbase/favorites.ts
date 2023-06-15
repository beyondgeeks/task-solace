// const favorites = new Map<number, { title: string, image: string }>();

// export default favorites;
import PocketBase from "pocketbase";

const backendUrl = import.meta.env.SOLACE_POCKETBASE_URL || "pocketbase";
const port = import.meta.env.SOLACE_BACKEND_PORT || 8080;
const pocketBase = new PocketBase(`http://${backendUrl}:${port}`);

await pocketBase.admins.authWithPassword("admin@gmail.com", "1234567890");

type Favorite = {
    mal_id: number;
    title: string;
    image: string;
};

export const addFavorite = async (favorite: Favorite) => {
    await pocketBase.collection("favorites").create(favorite);
};

export const getFavorites = async () => {
    const data = await pocketBase.collection("favorites").getFullList();
    let favorites: { Mal_id: string; Title: string; Image: string }[] = [];
    data.forEach((datum) => {
        favorites.push({
            Mal_id: datum.mal_id,
            Title: datum.title,
            Image: datum.image,
        });
    });
    return favorites;
};

export const deleteFavorite = async (mal_id: string) => {
    const favorite = await pocketBase
        .collection("favorites")
        .getFirstListItem(`mal_id=${mal_id}`);
    await pocketBase.collection("favorites").delete(favorite.id);
};
