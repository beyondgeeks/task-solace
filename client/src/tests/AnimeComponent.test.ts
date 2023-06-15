import { describe, test, expect } from "vitest";
import { findByRole, render, screen, waitFor } from "@testing-library/svelte";
import AnimeComponent from "../routes/AnimeComponent.svelte";

const anime = {
    mal_id: 34822,
    image: "https://cdn.myanimelist.net/images/anime/2/85592.webp",
    title: "Tsuki ga Kirei",
};

describe("Anime Component", () => {
    test("Display title and image with data", async () => {
        const { getByText, getByTestId } = render(AnimeComponent, {
            ...anime,
        });
        await waitFor(() => getByText(anime.title));
        expect(getByTestId(`mal-${anime.mal_id}`).getAttribute("href")).toEqual(
            `/${anime.mal_id}`,
        );
        expect(getByTestId(`img-${anime.mal_id}`).getAttribute("src")).toEqual(
            `${anime.image}`,
        );
        expect(getByTestId(`img-${anime.mal_id}`).getAttribute("alt")).toEqual(
            `${anime.title}`,
        );
    });
});
