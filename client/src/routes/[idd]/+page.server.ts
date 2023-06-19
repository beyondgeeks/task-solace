import { apiRequest } from "$lib/api.util";
import { addFavorite, deleteFavorite } from "$lib/favorites.utils";
// import { addFavorite, deleteFavorite } from "$lib/pocketbase/favorites";
import type { Actions, PageServerLoad } from "./$types";
import { z } from "zod";

export type Anime = {
    data: {
        mal_id: number;
        title: string;
        url: string;
        images: {
            webp: {
                image_url: string;
                small_image_url: string;
                large_image_url: string;
            };
        };
    };
};

export const load = (async ({ params }) => {
    const id = params.idd;
    const anime = await apiRequest<Anime>(`anime/${id}`);
    return {
        anime: anime.data,
    };
}) satisfies PageServerLoad;

const createItemSchema = z.object({
    mal_id: z.string().min(1),
    title: z.string().min(1),
    image: z.string().min(1),
});

const deleteItemSchema = z.object({
    mal_id: z.string().min(1),
});

export const actions = {
    addToFavorites: async ({ request }) => {
        const form = await request.formData();

        const { mal_id, title, image } = createItemSchema.parse(
            Object.fromEntries(form),
        );

        await addFavorite({ mal_id: parseInt(mal_id), title, image });

        return { success: true };
    },
    deleteFromFavorites: async ({ request }) => {
        const form = await request.formData();

        const { mal_id } = deleteItemSchema.parse(Object.fromEntries(form));
        await deleteFavorite(mal_id);

        return { success: true };
    },
} satisfies Actions;
