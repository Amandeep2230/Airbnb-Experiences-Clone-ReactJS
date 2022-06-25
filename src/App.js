import React from "react"
import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
import Card from "./Card.js"
import "./index.css"
import data from "./data.js"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
    )
})

    return (
        <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
          {cards}
          </section>
        </div>
    )
} 