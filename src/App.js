import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Decks from './Components/Decks'
import Crystals from './Components/Crsytals'
import Aromas from './Components/Aromas'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/decks' component={Decks} />
          <Route path='/crystals' component={Crystals} />
          <Route path='/aromas' component={Aromas} />
          {/* <Footer /> */}
        </div>

      </BrowserRouter>
    )
  }
}

export default App;
