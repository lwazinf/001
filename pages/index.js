import styles from '../styles/Home.module.css'

import Facebook from '../components/Facebook'
// import TakeALot from '../components/TakeALot'
import Instagram from '../components/Instagram'
import Twitter from '../components/Twitter'

import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

export default function Home() {
  const { } = useContext(AppContext);

  return (
    <main className={styles.main}>
      {/* <TakeALot /> */}
      <Twitter />
      <div className={styles._row}>
        <Facebook />
        <Instagram />
      </div>
    </main>
  )
}

