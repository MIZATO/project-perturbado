import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/inicio">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/products">
            <i class="fa fa-database" aria-hidden="true"></i> Estoque
            </Link>
            <Link to="/fechamento">
            <i class="fa fa-calculator" aria-hidden="true"></i> Fechamento de Caixa
            </Link>
        </nav>
    </aside>
)