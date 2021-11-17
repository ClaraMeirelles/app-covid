import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/formulario">
                    <i class="fa fa-wpforms"></i> Formulário
                </Link>
            </nav>
        </aside>
    )
}

export default Nav;