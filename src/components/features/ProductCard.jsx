import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";
import { API_BASE_URL } from "../../services/connectionUtils.js";

function ProductCard({product}) {

    return <>
        <div className="card" style={{width: "18rem"}}>
            <Link to={`/products/${product.slug}`}>
                <img src={`${API_BASE_URL}/${product.image_main}`} className="card-img-top" alt="..."></img>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{product.name || "Product Name"}</h5>
                <p className="card-text">{product.short_description || "Product Description"}</p>
                <p className="card-text">{`$${product.price}` || "Product Description"}</p>
                <a href="#" className="btn btn-dark"><LuShoppingCart /></a>
            </div>
        </div>
    </>
}
export default ProductCard;
