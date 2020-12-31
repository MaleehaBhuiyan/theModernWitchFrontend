import React from 'react'
import { Link } from 'react-router-dom'

class DecksDropdown extends React.Component{
    render(){
        return(
            <div className="ddMenu purple darken-3">
                <div className="ddText">
                    <div id="st-box">
                        <p>All Decks</p>
                            <Link to="/tarot"><p style={{"font-size":"small"}}>Tarot</p></Link>
                            <Link to="/oracle"><p style={{"font-size":"small"}}>Oracle</p></Link>
                            <Link to="/lenormandKipper"><p style={{"font-size":"small"}}>Lenormand & Kipper</p></Link>
                            <Link to="/decksInTins"><p style={{"font-size":"small"}}>Decks in Tins</p></Link>
                            <Link to="/beginners"><p style={{"font-size":"small"}}>Tarot for Beginners</p></Link>
                            <Link to="/smith"><p style={{"font-size":"small"}}>Classic Rider Waite Smith Decks</p></Link>

                        <br/>
                        <p>Accessories</p> 
                            <Link to="/"><p style={{"font-size":"small"}}>Books</p></Link>
                            <Link to="/"><p style={{"font-size":"small"}}>Boxes</p></Link>
                            <Link to="/"><p style={{"font-size":"small"}}>Tarot Bags</p></Link>
                            <Link to="/"><p style={{"font-size":"small"}}>Runes</p></Link>
                    </div>
                    <div id="nd-box">
                        <p>Featured Collections</p>
                        <Link to="/"><p style={{"font-size":"small"}}>Il Meneghello Edizioni </p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Diverse Tarot</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Paulina Cassidy</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Liz Dean</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Robert M Place</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Circo Marchetti</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Rider-Waite-Smith</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>World Cultures</p></Link>
                        <Link to="/"><p style={{"font-size":"small"}}>Erotic Tarots</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}





export default DecksDropdown