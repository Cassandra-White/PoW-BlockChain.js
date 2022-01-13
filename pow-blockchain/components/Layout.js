import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

class Layout extends Component {
  state = {
    activeMenu: "Blockscard",
  };

  updateActiveMenu = (menu) => {
    this.setState({ activeMenu: menu });
  };
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>PoW-Blockchain.js</title>
          <meta name="description" content="Proof Of Work Blockchain in JS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header updateActiveMenu={this.updateActiveMenu} />
        <Container
          className="ui center  container"
          activeMenu={this.state.activeMenu}
        >
          {this.props.children}
        </Container>

        <Footer />
      </div>
    );
  }
}
export default Layout;
