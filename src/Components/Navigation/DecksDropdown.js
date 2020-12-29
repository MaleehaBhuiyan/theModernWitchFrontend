import React from 'react'
import { Link } from 'react-router-dom'

class DecksDropdown extends React.Component{
    render(){
        return(
            <div className="ddMenu purple darken-3">
                <div className="ddText">
                    <p><Link to="/aromas">Tarot</Link></p>
                    <p><Link to="/crystals">Oracles</Link></p>
                    <p><Link to="/decks">All Decks</Link></p>  
                </div>
            </div>
        )
    }
}


export default DecksDropdown