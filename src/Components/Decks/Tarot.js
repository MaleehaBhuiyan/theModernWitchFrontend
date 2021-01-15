import React from 'react'
// import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'


class Tarot extends React.Component{

    cards = () => {
        return this.props.cards.map(card => {return card})
    }

    render(){
        return(
            <div>
                <div className="tarotPageImg"></div>
                <div style={{color:"white", fontFamily:"Georgia, serif", textAlign:"center", position:"relative", bottom:250, textShadow:"3px 3px 3px #000"}}>
                    <h1>Tarot Decks and Kits</h1>
                </div>

                <>
                {this.props.cards === 0 ? 
                <h1>LOADING</h1> 
                : 
                <h1>CARDS GO HERE</h1>
                }
                </>
            </div>
        )
    }
}

export default Tarot