<script lang="ts">
    export let title: string;
    export let mal_id: number;
    export let image: string;
</script>

<h1>{title}</h1>

<a href="/{mal_id}" class="flex justify-center" data-testid="mal-{mal_id}">
    <img
        class="hover:opacity-50 hover:cursor-pointer"
        src={image}
        alt={title}
        height="200px"
        width="200px"
        data-testid="img-{mal_id}"
    />
</a>
