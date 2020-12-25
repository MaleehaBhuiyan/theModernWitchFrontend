import React from 'react'  
import TarotCard from '../Images/mainTarotLandingPage.jpeg'
import PurpleCrsytal from '../Images/purpleHealingStones.jpg'
import PinkCrystal from '../Images/pinkHealingStones.jpg'
import BlueCrystal from '../Images/blueHealingStones.jpg'
import VideoOne from '../Video/aromaVideo1.mp4'
// import { GreatThings} from 'moving-letters'

class Home extends React.Component{

    
    render(){
        return(
            <div className="landingPage purple-text text-darken-3" >
                
                <div className="landingPageImg">
                </div>
                
                <div className="landingPageTarot flex-container">
                    <div className="flex-child">
                        <div className="landingPageTarotLeft">
                            <h1>Find Guidance</h1>
                            {/* <h3>Choose a card, any card</h3> */}
                        </div>
                    </div>
                    <div className="landingPageTarotRight flex-child">
                        <img src={TarotCard} alt="Tarot card with white flower" height="650"/>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                <div className="landingPageCrystal">
                    <h1 style={{textAlign: "center"}}>Crystals</h1>
                    <div className="landingPageCrystalTrio">
                        <div class="box"> {/* Change this img later*/}
                            <img src={PurpleCrsytal} alt="Tarot card with white flower" height="300" width="325" />
                        </div>
                        <div class="box">
                            <img src={PinkCrystal} alt="Tarot card with white flower"  height="300" width="325" />
                        </div>
                        <div class="box">
                            <img src={BlueCrystal} alt="Tarot card with white flower" height="300" width="325" />
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                <div className="landingPageAroma flex-container">
                    <div className="flex-child">
                        <h1 style={{textAlign: "center"}}>Aroma Therapy</h1>
                    </div>
                    <div className="flex-child">
                        <video src={VideoOne} width="600" height="300" controls="controls" autoPlay={true} /> {/* Fix this  */}
                    </div>
                </div>

            </div>
        )
    }
}

export default Home 

