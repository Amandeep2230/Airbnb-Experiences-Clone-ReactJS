import React from "react"
import "./index.css"
import logo from "./airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo" />
        </nav>
    )
}