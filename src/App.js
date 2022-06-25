import React from "react"
import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
import Card from "./Card.js"
import "./index.css"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <div>
          <Navbar />
          <Card 
          profile_img = "card_img1"
          rating_img = "card_star"
          rating = "5.0"
          count = "(6) •"
          location = " USA"
          name = "Life lessons with Katie Zaferes"
          price = "From $136"
          person = "/ person"
          />
        </div>
    )
} 