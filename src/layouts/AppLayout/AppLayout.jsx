import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./AppLayout.module.css";



function AppLayout() {
    return <>
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />

        </div>
    </>
}
export default AppLayout;