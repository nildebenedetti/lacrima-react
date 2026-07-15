import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";


function Footer() {
    return <>
        <footer className="pt-5 pb-3 mt-auto">
            <div className="container">

                {/* ROW PRINCIPALE */}
                <div className="row gy-4 px-3 d-flex">

                    {/* BRAND */}
                    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column pb-sm-2 p-md-3">
                        <Link className="navbar-brand " to="/">
                            <img src="/logos/lacrima-unicorn-txt-logo.png" alt="lacrima-unicorn-logo" className={`img-fluid p-2 ${style.logoImg}`} ></img>
                        </Link>
                        <figure class="text-center">
                            <blockquote class="emotional-quote">
                                <p className="text-muted text-center">
                                    Beauty belongs to those who still dare to feel.
                                </p>
                            </blockquote>
                        </figure>   
                    </div>
                    {/* CONTACTS */}
                    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column py-md-5">
                        <h5 className="mb-3">Contacts</h5>
                        <ul className="list-unstyled text-muted small lh-lg">
                            <li><strong>Email:</strong> info@lacrima.com</li>
                            <li><strong>Phone:</strong> +39 02 117 1271</li>
                            <li><strong>Address:</strong> Vicolo della Fonte, 1, Fumane (VR) 37022 - Italy</li>
                        </ul>
                    </div>
                    {/* NAVIGATION */}
                    <div className="col-6 col-md-6 col-lg-3 d-flex flex-column py-md-5">
                        <h5 className="mb-3">Navigation</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-muted text-decoration-none hover-link">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-muted text-decoration-none hover-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products" className="text-muted text-decoration-none hover-link">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div className="col-6 col-md-6 col-lg-3 d-flex flex-column align-items-center align-items-md-start py-md-5">
                        <h5 className="mb-3">Social</h5>
                        <ul className="list-unstyled d-flex flex-column gap-3 pt-1">
                            <li>
                                <a href="#" className="text-muted text-decoration-none d-flex align-items-center gap-2 hover-link">
                                    <FaInstagram className="fs-2" /> <span>lacrima_</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted text-decoration-none d-flex align-items-center gap-2 hover-link">
                                    <FaTwitter className="fs-2" /> <span>lacrima_</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted text-decoration-none d-flex align-items-center gap-2 hover-link">
                                    <FaFacebook className="fs-2" /> <span>lacrima_</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="text-secondary my-4" />
                {/* FOOTER BOTTOM */}
                <div className="row">
                    <div className="col text-center text-muted small">
                        <p className="mb-0">© 2026 L A C R I M A — All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    </>
}
export default Footer;