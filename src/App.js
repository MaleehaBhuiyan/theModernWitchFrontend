import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App;
