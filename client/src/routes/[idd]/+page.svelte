<script lang="ts">
    import { enhance } from "$app/forms";
    import AnimeComponent from "../AnimeComponent.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

</script>

<div class="flex items-center justify-center gap-5">
    <div class="text-xl font-bold flex flex-col items-center">
        <AnimeComponent
            title={data.anime.title}
            mal_id={data.anime.mal_id}
            image={data.anime.images.webp.image_url}
        />
    </div>
    <div>
        <form action="?/addToFavorites" method="post" use:enhance>
            <input type="hidden" name="mal_id" value={data.anime.mal_id} />
            <input type="hidden" name="title" value={data.anime.title} />
            <input
                type="hidden"
                name="image"
                value={data.anime.images.webp.image_url}
            />
            <button class="bg-green-500 rounded p-4 text-white" type="submit">
                Add to favorites
            </button>
        </form>
        <form class="mt-5" action="?/deleteFromFavorites" method="post" use:enhance>
            <input type="hidden" name="mal_id" value={data.anime.mal_id} />
            <button class="bg-red-500 rounded p-4 text-white" type="submit">
                Delete from favorites
            </button>
        </form>
        <div class="mt-10">
            <a class="bg-gray-300 rounded p-4" href="/">Go back to list</a>
        </div>
    </div>
</div>
