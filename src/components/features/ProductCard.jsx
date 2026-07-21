import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { API_BASE_URL } from "../../services/connectionUtils.js";
import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <div className="card-wrapper col-sm-12 col-md-4 col-lg-3">
            <div className={styles.productCard}>
                <div className={styles.cardHeader}>
                    <span className={`${styles.favHeart} icon`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        {isHovered ? <FaHeart color="#b388ff" /> : <LuHeart />}
                        </span>
                </div>
                <Link to={`/products/${product.slug}`}>
                    <img src={`${API_BASE_URL}/${product.image_main}`} className={`${styles.cardImg}`} alt="..."></img>
                </Link>
                <div className={`${styles.cardBody}`}>
                    <p className={`${styles.cardTitle} px-3`}>{product.name || "Product Name"}</p>
                    <div className="d-flex justify-content-between align-items-baseline py-3">
                    </div>
                    <div className={`${styles.cardBottom} px-3`}>
                        <p className={styles.cardPrice}>{`$${product.price}` || "Product Description"}</p>
                        <a href="#" className={`${styles.cartBtn} btn`}><LuShoppingCart /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductCard;
