import React from "react"
import "./index.css"
import card_img1 from "./katie-zaferes.png"
import card_star from "./star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={card_img1} className="card-img1" />
            <div className="card-stats">
                <img src={card_star} className="card_star" />
                <span>{props.rating}</span>
                <span className="gray">{props.count}</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.name}</p>
            <p> <span className="bold">{props.price}</span> {props.person}</p>
        </div>
    )
}