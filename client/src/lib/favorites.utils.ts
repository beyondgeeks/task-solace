// const favorites = new Map<number, { title: string, image: string }>();

// export default favorites;
const backendUrl = import.meta.env.SOLACE_BACKEND_URL || "localhost";
const port = import.meta.env.SOLACE_BACKEND_PORT || 8080;

type Favorite = {
    mal_id: number;
    title: string;
    image: string;
};

export const addFavorite = async (favorite: Favorite) => {
    const res = await fetch(`http://${backendUrl}:${port}/api/favorites`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(favorite),
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch and received ${res.status}`);
    }
};

export const getFavorites = async () => {
    const res = await fetch(`http://${backendUrl}:${port}/api/favorites`);
    if (!res.ok) {
        throw new Error(`Failed to fetch and received ${res.status}`);
    }
    try {
        const { data } = await res.json();
        return data;
    } catch (err) {
        throw new Error(`Failed to parse JSON response`);
    }
};

export const deleteFavorite = async (mal_id: string) => {
    const res = await fetch(
        `http://${backendUrl}:${port}/api/favorites/${mal_id}`,
        {
            method: "delete",
        },
    );
    if (!res.ok) {
        throw new Error(`Failed to fetch and received ${res.status}`);
    }
};
