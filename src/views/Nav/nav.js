import React from "react";
import './nav.scss'
import {Link,NavLink } from 'react-router-dom'
class Nav extends React.Component {

    render() {
        return(<div class="topnav">
        <NavLink class="active" to="/" activeClassName='active' exact={true}    >Home</NavLink>
        <NavLink to="/about" activeClassName='active' >About</NavLink>
       
       
      </div>)
    }
}
export default Nav