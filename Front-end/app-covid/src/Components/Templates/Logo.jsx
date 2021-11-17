import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoUfsc2.svg"
import './Logo.css'

function Logo() {
    return (
        <aside className="logo">
            <Link to="/">
                <img src={logo} alt="Logo Ufsc" />
            </Link>
        </aside>
    )
}

export default Logo;