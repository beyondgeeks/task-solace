<script lang="ts">
  import type { PageData } from "./$types";
  import AnimeComponent from "./AnimeComponent.svelte";

  export let data: PageData;
  
</script>

<div class="grid grid-cols-2 gap-5">
  {#each data.recommended.data as recommendation}
    <div class="border border-gray-800 rounded mb-4">
      <h1 class="p-2 border-b border-gray-800 text-2xl font-bold text-center bg-gradient-to-b from-33 from-gray-700 via-66 via-gray-400 to-gray-700 text-white line-clamp-2">
        {recommendation.content}
      </h1>
      <div class="grid grid-cols-2 ">
        {#each recommendation.entry as subRecommendation}
          <div
            class="p-2 text-xl font-bold mb-2 items-center flex flex-col"
          >
            <AnimeComponent
              title={subRecommendation.title}
              mal_id={subRecommendation.mal_id}
              image={subRecommendation.images.webp.image_url}
            />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
