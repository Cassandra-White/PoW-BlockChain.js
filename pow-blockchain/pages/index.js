import React, { Component } from "react";
import Layout from "./components/Layout";
import styles from "../styles/Home.module.css";
import blockchain from "./components/Layout2";
import Transactions from "./components/Transactions";
import Blockscard from "./components/BlocksCard";
import Params from "./components/Params";

// export default function Home(props) {
  export default class Home extends Component {

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              <a href="https://github.com/Cassandra-White/PoW-BlockChain.js">
                PoW-Blockchain.js
              </a>
            </h1>

            <p className={styles.description}>
              PoW-BlockChain.js est une blockchain à validation par Proof of Work
            </p>
            
            <Params blockchain={blockchain}/>
            <Blockscard blockchain={blockchain} />


          </main>
        </div>
      </Layout>
    );
}
  }
