import React from 'react'
import Tarot from '../Components/Decks/Tarot'

const CARD_URL = "http://localhost:3000/cards"

class Cards extends React.Component{

    state = {
        cards: []
    }

    fetchCards = () => {
        fetch(CARD_URL)
        .then(res => res.json())
        .then(cardData => this.setState({ cards:cardData }))
    }

    componentDidMount(){
        this.fetchCards()
    }

    render(){
        return(
            <Tarot cards={this.state.cards} />
        )
    }
}

export default Cards