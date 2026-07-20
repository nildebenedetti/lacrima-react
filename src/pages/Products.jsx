import { useState, useEffect } from "react";
import api from "../services/api.js";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await api.getProducts(); // Ora data contiene effettivamente i prodotti!
                setProducts(data);
            } catch (err) {
                // Gestisci l'errore nell'interfaccia utente se serve
            }
        }

        loadData();

    }, []);

    return <>
        <p>{JSON.stringify(products)}</p>
    </>
}

export default Products;