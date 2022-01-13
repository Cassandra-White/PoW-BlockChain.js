import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import blockchain from "../components/Layout2";
import Blockscard from "../components/BlocksCard";
import Params from "../components/Params";
import WalletTransaction from "../components/WalletTransaction";
import { Card } from "semantic-ui-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItsWorks from "../components/HowItsWorks";

export default function Home() {
  const updateBlock = () => {
    setBlocks(blockchain.getBlocks());
  };

  const updateActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  const updateWallets = () => {
    return setWallets(blockchain.walletKeys);
  };

  const [blocks, setBlocks] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const [wallets, setWallets] = useState();

  useEffect(() => {
    setBlocks(blockchain.getBlocks());
    setActiveMenu("Blockscard");
    setWallets(blockchain.walletKeys);
  }, []);
  return (
    <>
      <Head>
        <title>PoW-Blockchain.js</title>
        <meta name="description" content="Proof Of Work Blockchain in JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header updateActiveMenu={updateActiveMenu} />

      <div className={styles.container} style={{ backgroundColor: "#F8F8F8" }}>
        <main className={styles.main}>
          {activeMenu == "Blockscard" ? (
            <>
              <h1 className={styles.title}>La Blockchain</h1>

              <p className={styles.description}>
                PoW-BlockChain.js est une démo dapplication web faisant tourner
                une blockchain à validation par Proof of Work en javascripts
              </p>

              <Card fluid style={{ padding: "3rem" }}>
                <Blockscard blockchain={blockchain} blocks={blocks} />
              </Card>
            </>
          ) : activeMenu == "Params" ? (
            <>
              <h1 className={styles.title}>Paramètres</h1>

              <p className={styles.description}>
                Changez la difficulté de minage et les récompences des Mineurs
              </p>
              <Card fluid style={{ padding: "3rem" }}>
                <Params blockchain={blockchain} />
              </Card>
            </>
          ) : activeMenu == "AddTransaction" ? (
            <>
              <h1 className={styles.title}>Wallet et Transactions</h1>

              <p className={styles.description}>
                Créez vous un wallet et intéragissez avec la blockchaine en
                creant des transactions et en minant
              </p>
              <Card fluid style={{ padding: "3rem" }}>
                <WalletTransaction
                  blockchain={blockchain}
                  blocks={blocks}
                  getBlocks={updateBlock}
                  wallets={wallets}
                  updateWallets={updateWallets}
                />
              </Card>
            </>
          ) : activeMenu == "HowItsWorks" ? (
            <>
              <h1 className={styles.title}>Comment ça marche ?</h1>
              <Card fluid style={{ padding: "3rem" }}>
                <HowItsWorks />
              </Card>
            </>
          ) : (
            <h3>Error : Affichage</h3>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
