import React from 'react'
import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'

class Tarot extends React.Component{
    render(){
        return(
            <div>
                <div className="tarotPageImg"></div>
                <div style={{color:"white", fontFamily:"Georgia, serif", textAlign:"center", position:"relative", bottom:250, textShadow:"3px 3px 3px #000"}}>
                    {/* <GreatThings text='Tarot Decks' /> */}
                    <h1>Tarot Decks and Kits</h1>
                </div>
            </div>
        )
    }
}

export default Tarot