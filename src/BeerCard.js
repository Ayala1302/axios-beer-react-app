import React, { useState } from "react";

function BeerCard(props) {
  const [likes, setLikes] = useState(false);

  const handleLikes = () => {
    !likes ? setLikes(true) : setLikes(false);
  };

  return (
    <li style={{ listStyle: "none" }}>
      <img style={{ height: "200px" }} src={props.image_url}></img>
      <h3>
        {props.name} <span>{props.first_brewed}</span>
      </h3>
      <h4>{props.tagline}</h4>
      <p>
        <span>{props.abv}</span>
        {props.description}
      </p>
      <p
        onClick={() => {
          props.handleClickBeer(props.index);
          handleLikes();
        }}
      >
        {likes ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </li>
  );
}

export default BeerCard;
