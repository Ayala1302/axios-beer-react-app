import React from 'react'


function BeerCard(props) {
    return (
        <li style={{ listStyle: "none" }}>
            <img style= {{ height: "200px" }} src={props.image_url}></img>
            <h3>{props.name} <span>{props.first_brewed}</span></h3>
            <h4>{props.tagline}</h4>
            <p><span>{props.abv}</span>{props.description}</p>
            <button onClick={() => props.handleClickBeer()}>Like</button>
        </li>
        
    )
}

export default BeerCard