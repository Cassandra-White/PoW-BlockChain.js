import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
// import Blockchain from './blockchain';

const Layout = (props) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>PoW-Blockchain.js</title>
            <meta name="description" content="Proof Of Work Blockchain in JS" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header />
      <Container className="ui center  container" >{props.children}</Container>

      <Footer />
    </div>

    
  );
};
export default Layout;