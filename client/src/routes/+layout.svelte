<script lang="ts">
    import "../app.css";
    import type { LayoutData } from "./$types";
    import AnimeComponent from "./AnimeComponent.svelte";
    import { slide } from 'svelte/transition';
    import { enhance } from "$app/forms";

    export let data: LayoutData;
</script>

<div class="p-4 grid grid-cols-5 gap-5">
    <div class="col-span-4">
        <p class="text-2xl font-bold mb-5 text-center"> Recommended </p>
        <slot />
    </div>
    <div class="flex flex-col items-center text-xl font-bold gap-5">
        <span class="text-2xl"> Favorites </span>
        {#each [...data.favorites] as {Mal_id, Title, Image}}
            <div
                class="text-center"
                transition:slide
            >
                <AnimeComponent
                    title={Title}
                    mal_id={Mal_id}
                    image={Image}
                />
                <form class="mt-5" action={`/${Mal_id}?/deleteFromFavorites`} method="post" use:enhance>
                    <input type="hidden" name="mal_id" value={Mal_id} />
                    <button class="bg-red-500 rounded p-4 text-white" type="submit">
                        Delete from favorites
                    </button>
                </form>
            </div>
        {/each}
    </div>
</div>
