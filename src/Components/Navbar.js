import React from 'react';
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import DecksDropdown from './Navigation/DecksDropdown'
import { connect } from 'react-redux'

class Navbar extends React.Component{
  state = {
    showMenu: false 
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

    render(){
        return(
            <div className="navbar-fixed">
            <nav className="purple darken-3">
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo"><img src={Logo} alt="The Modern Witch Logo" width="100" /></Link>
                
                <ul className="left hide-on-med-and-down centerLinks"> 
                  <li onClick={() => this.handleClick()}><a>Deck</a></li>
                  <li><a>Crystals</a></li>
                  <li><a>Aroma Therapy</a></li>
                </ul>
                
                <ul className="right hide-on-med-and-down">
                  <li><Link to="/"><i className="material-icons">favorite</i></Link></li>
                  <li><Link to="/"><i className="material-icons">shopping_cart</i></Link></li>
                  <li><Link to="/"><i className="material-icons">account_circle</i></Link></li>
                </ul>
              </div>
              {
                    this.state.showMenu ? <DecksDropdown /> : null
              }
            </nav>
          </div>
        )
    }
}

export default Navbar