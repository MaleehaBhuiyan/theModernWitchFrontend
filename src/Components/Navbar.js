import React from 'react' 
import Logo from '../Images/logo.png'

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar-fixed">
            <nav className="purple darken-3">
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><img src={Logo} alt="The Modern Witch Logo" width="100" /></a>
                <ul className="left hide-on-med-and-down centerLinks"> {/*MAKE THIS MOBILE RESPONSIVE LATER */}
                    <li><a href="" className="center">Decks</a></li>
                    <li><a href="" className="center">Crystals</a></li>
                    <li><a href="" className="center">Aroma Therapy</a></li>
                </ul>
                <ul className="right hide-on-med-and-down">
                    <li><a href=""><i className="material-icons">favorite</i></a></li>
                    <li><a href=""><i className="material-icons">shopping_cart</i></a></li>
                    <li><a href=""><i className="material-icons">account_circle</i></a></li>
                </ul>
              </div>
            </nav>
          </div>
        )
    }
}

export default Navbar 