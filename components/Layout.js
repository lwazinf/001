import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import React from "react";
import Modal from './Modal'

const Layout = ({ children }) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}

            <Modal />

        </div>
    );
}

export default Layout;