import Link from "next/link";
import React , {Component} from "react";
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state={
    activeMenu : "Blockscard"
  }
  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeMenu: name })
    this.props.updateActiveMenu(name);
  };


  render() {
    return (
      <Menu >
        <Link href="/">
          <Menu.Item
            name='home'
          >
            Pow-Blockchain.js
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
        
        <Menu.Item
          name='Blockscard'
          active={this.props.activeMenu === 'Blockscard'}
          onClick={this.handleItemClick}
        >
          La Blockchain
        </Menu.Item>
       
   

        <Menu.Item
          name='Params'
          active={this.props.activeMenu === 'Params'}
          onClick={this.handleItemClick}
        >
          Paramètres
        </Menu.Item>
        <Menu.Item
          name='AddTransaction'
          active={this.props.activeMenu === 'AddTransaction'}
          onClick={this.handleItemClick}
        >
          Créer une transaction
        </Menu.Item>
        </Menu.Menu>

      </Menu>
    );
  }
};
