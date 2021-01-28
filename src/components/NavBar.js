import React from "react"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Ethan
                    </NavLink>
                    <NavLink to="/post">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
        )
}