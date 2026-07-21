const URL = import.meta.env.VITE_SERVER_URL || "localhost";
const PORT = import.meta.env.VITE_SERVER_PORT || 3000;

const API_BASE_URL = `http://${URL}:${PORT}`;

export {
    URL,
    PORT,
    API_BASE_URL
};