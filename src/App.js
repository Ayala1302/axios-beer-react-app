import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import BeerCard from "./BeerCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfBeer: []
    };
  }

  // In your app.js component make an HTTP request with axios to: https://api.punkapi.com/v2/beers and set the data that comes back into an array in state.
  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  name={beer.name}
                  image_url={beer.image_url}
                  tagline={beer.tagline}
                  description={beer.description}
                  first_brewed={beer.first_brewed}
                  abv={beer.abv}
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

// Build a beer component that displays everything about the beer.
// const BeerComponent = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>{props.tagline}</p>
//       <p>{props.description}</p>
//       <p>{props.first_brewed}</p>
//       <p>{props.food_pairing}</p>
//       <p>{props.brewers_tips}</p>
//       <p>{props.contributed_by}</p>
//     </div>
//   )
// }

// Map over state and render a component for each beer in state
// const beerComponents = this.state.beers.map(beer => {
//   return (
//     <BeerComponent
//       name={beer.name}
//       tagline={beer.tagline}
//       description={beer.description}
//       first_brewed={beer.first_brewed}
//       food_pairing={beer.food_pairing}
//       brewers_tips={beer.brewers_tips}
//       contributed_by={beer.contributed_by}
//     />
//   )
// })

// Add a button that allows a user to "like" a beer
//   const likeBeer = (beer) => {
//     const newBeers = this.state.beers.map(b => {
//       if (b.id === beer.id) {
//         b.likes = b.likes + 1
//       }
//       return b
//     })
//     this.setState({ beers: newBeers })
//   }

export default App;
