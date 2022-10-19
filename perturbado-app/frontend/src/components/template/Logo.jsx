import './Logo.css'
import React from "react";
import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

export default props =>
    <aside className='logo'>
       <Link to='/inicio' className='logo'>
        <img src={logo} alt="logo" />
       </Link>
    </aside>