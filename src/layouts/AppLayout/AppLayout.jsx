import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./AppLayout.module.css";



function AppLayout() {
    return <>
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    </>
}
export default AppLayout;