import React from "react";
import { Link, NavLink } from "react-router";
import style from "./Navbar.module.css";

function Navbar() {

    return <>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.text}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="../logos/lacrima-unicorn-logo.png" alt="lacrima-unicorn-logo" className={style.logoImg} ></img>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Lines
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item disabled" to="/action">
                                        Vita
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item disabled" to="/another-action">
                                        Carezza
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item disabled" to="/something-else">
                                        Luce
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/">
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button className="btn btn-outline-dark disabled" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;
