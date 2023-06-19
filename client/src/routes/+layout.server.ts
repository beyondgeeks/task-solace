import { getFavorites } from "$lib/favorites.utils";
// import { getFavorites } from "$lib/pocketbase/favorites";
import type { LayoutServerLoad } from "./$types";

export const load = (async () => {
    const favorites = await getFavorites();
    return {
        favorites: favorites,
    };
}) satisfies LayoutServerLoad;
