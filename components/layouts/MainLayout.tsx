import React, { FC } from "react";
import Head from "next/head";
import styles from "./MainLayout.module.css";
import { NavBar } from "../NavBar";
import { PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Erick Hernández</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
