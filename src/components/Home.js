import React from "react";
import image from "../background-brick-wall2.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="brick wall" className="absolute object-cover min-w-full min-h-full"/>
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="justified-center text-6xl text-gray-800 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Ethan.</h1>
                </section>
        </main>
    );
}