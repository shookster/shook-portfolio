import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest">
                        Ethan
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
                    activeClassName="text-gray-100 bg-gray-700"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800" activeClassName="text-gray-100 bg-gray-700">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800" activeClassName="text-gray-100 bg-gray-700">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/ethanshook" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35 , width: 35}}/>
                    <SocialIcon url="https://github.com/shookster" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35 , width: 35}}/>
                    <SocialIcon url="https://linkedin.com/in/ethanshook" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35 , width: 35}}/>
                </div>
            </div>
        </header>
        )
}