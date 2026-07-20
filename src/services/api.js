const URL = import.meta.env.VITE_SERVER_URL || "localhost";
const PORT = import.meta.env.VITE_SERVER_PORT || 3000;

const API_URL = `http://${URL}:${PORT}`;

const api = {
    async getProducts() {
            try {
                const response = await fetch(`${API_URL}/products`);

                if (!response.ok) {
                    throw new Error("An error occourred when loading data", error);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                return data.result || data;

            } catch (error) {

            console.error("error loading products form database");

            }

        },
    async getProductBySlug(slug) {
            try {
                const response = await fetch(`${API_URL}/products/${slug}`);

                if (!response.ok) {
                    throw new Error("An error occourred when loading data", error);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                return data.result || data;

            } catch (error) {

            console.error("error loading products form database")
            };

        },
}

export default api;