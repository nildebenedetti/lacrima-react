import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";
import { API_BASE_URL } from "../../services/connectionUtils.js";

function ProductCard({ product }) {

    return <>
        <div className="card col-sm-12 col-md-3 col-lg-4 m-2" style={{ width: "18rem" }}>
            <Link to={`/products/${product.slug}`}>
                <img src={`${API_BASE_URL}/${product.image_main}`} className="card-img-top" alt="..."></img>
            </Link>
            <div className="card-body">
                <p className="card-title">{product.name || "Product Name"}</p>
                <div className="d-flex justify-content-between align-items-baseline py-3">
                    <p className="card-text">{`$${product.price}` || "Product Description"}</p>
                    <a href="#" className="btn btn-dark"><LuShoppingCart /></a>
                </div>
            </div>
        </div>
    </>
}
export default ProductCard;
