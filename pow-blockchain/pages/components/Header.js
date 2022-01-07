import Link from "next/link";
import React , {Component} from "react";
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  render() {
    return (
      <Menu >
        <Link href="/">
          <Menu.Item
            name='home'
          >
            Pow-B.js
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
        
        <Link href="/autre">
        <Menu.Item
          name='reviews'
          position="right"
        >
          autres
        </Menu.Item>
       
        </Link>

        <Menu.Item
          name='addBlock'
          position="right"
        >
          Ajouter un Block
        </Menu.Item>
        </Menu.Menu>

      </Menu>
    );
  }
};
