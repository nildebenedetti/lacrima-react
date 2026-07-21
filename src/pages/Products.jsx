import { useState, useEffect } from "react";
import api from "../services/api.js";
import ProductCard from "../components/features/ProductCard.jsx";

function Products() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function loadData() {
            try {
                const data = await api.getProducts(); // Ora data contiene effettivamente i prodotti!
                console.log("Risposta API:", data);
                setProducts(data.results);
            } catch (error) {
                // Gestisci l'errore nell'interfaccia utente se serve
            }
        }

        loadData();

    }, []);

    console.log("Tipo di products:", typeof products, products);

    return <> 
    <div className="container px-4 px-md-5">
        <div className="page-header">
        <p className="fs-2">Discover Lacrima </p>
    </div>
        <div className="row justify-content-center g-4">
            {Array.isArray(products) && products.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
        </div>
    </div>

    </>
}

export default Products;