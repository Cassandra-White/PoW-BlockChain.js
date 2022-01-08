import React, { Component } from "react";
import Layout from "./components/Layout";
import Link from "next/link";


// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { Blockchain } from "../../blockchain/Blockchain";
import Blockchain from './components/blockchain';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
            
            <main className={styles.main}>

              <h1 className={styles.title}><a href="https://github.com/Cassandra-White/PoW-BlockChain.js">PoW-Blockchain.js</a></h1>
              

              <p className={styles.description}>
              PoW-BlockChain.js est une blockchain à validation par Proof of Work
              </p>

              <Blockchain/>
            </main>

           
    </div>
    </Layout>
  )
}
