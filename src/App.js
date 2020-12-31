import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Beginners from './Components/Decks/Beginners'
import DecksInTins from './Components/Decks/DecksInTins'
import LenormandKipper from './Components/Decks/LenormandKipper'
import Oracle from './Components/Decks/Oracle'
import Smith from './Components/Decks/Smith'
import Tarot from './Components/Decks/Tarot'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/beginners' component={Beginners} />
          <Route path='/decksInTins' component={DecksInTins} />
          <Route path='/lenormandKipper' component={LenormandKipper} />
          <Route path='/oracle' component={Oracle} />
          <Route path='/smith' component={Smith} />
          <Route path='/tarot' component={Tarot} />
          {/* <Footer /> */}
        </div>

      </BrowserRouter>
    )
  }
}

export default App;

