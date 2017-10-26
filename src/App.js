import React, { Component } from 'react';
import Form from './components/form';
import CardList from './components/cardList';
import './App.css';

class App extends Component {
	state = {
      cards: [
        {
          name: "Dan Abramov",
          avatar_url: "http://placehold.it/75",
          company: "Facebook"
        },

        {
          name: "Addy Osmani",
          avatar_url: "http://placehold.it/75",
          company: "Google"
        }
      ]  
  }
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }))
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App
