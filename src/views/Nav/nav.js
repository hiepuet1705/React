import React from "react";
import './nav.scss'
import {Link,NavLink } from 'react-router-dom'
class Nav extends React.Component {

    render() {
        return(<div class="topnav">
        <NavLink to="/"  exact    >Home</NavLink>
        <NavLink to="/about"  >About</NavLink>
        <NavLink to="/user" >User</NavLink>
       
      </div>)
    }
}
export default Nav