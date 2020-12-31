import React from 'react'  
import TarotOne from '../Images/tarotOne.jpg'
import TarotTwo from '../Images/tarotTwo.jpg'
import TarotThree from '../Images/tarotThree.jpg'
import { GreatThings} from 'moving-letters'

class Home extends React.Component{

    
    render(){
        return(
            <div className="landingPage purple-text text-darken-3" >
                
                <div className="landingPageImg"></div>
                <div style={{color:"white", fontFamily:"Georgia, serif", position:"relative", left:50, bottom:650, textShadow:"3px 3px 3px #000", inlineSize:2}}>
                    {/* <GreatThings text="Welcome" />
                    <GreatThings text="Modern" />
                    <GreatThings text="Witch" /> */}
                    
                    <GreatThings text="Welcome Modern Witch"/>

                    {/* <h1 style={{position:'relative', left:20}}>Welcome</h1>
                    <h1 style={{position:'relative', left:100}}>Modern</h1>
                    <h1 style={{position:'relative', left:200}}>Witch</h1> */}
                </div>

{/* 
                <div className="landingPageTarot flex-container">
                    <div className="box">
                        <img src={TarotOne} alt="Tarot card with white flower" height="325"/>
                    </div>
                    <div className="box">
                        <img src={TarotTwo} alt="Tarot card with white flower" height="350"/>
                    </div>
                    <div className="box">
                        <img src={TarotThree} alt="Tarot card with white flower" height="350"/>
                    </div>
                </div> */}
                

            </div>
        )
    }
}

export default Home 

                // <div className="landingPageTarot flex-container">
                //     <div className="flex-child">
                //         <div className="landingPageTarotLeft">
                //             <h1>Find Guidance</h1>
                //             {/* <h3>Choose a card, any card</h3> */}
                //         </div>
                //     </div>
                //     <div className="landingPageTarotRight flex-child">
                //         <img src={TarotCard} alt="Tarot card with white flower" height="650"/>
                //     </div>
                // </div>

                // <br/>
                // <br/>
                // <br/>
                // <br/>

                // <div className="landingPageCrystal">
                //     <h1 style={{textAlign: "center"}}>Crystals</h1>
                //     <div className="landingPageCrystalTrio">
                //         <div class="box"> {/* Change this img later*/}
                //             <img src={PurpleCrsytal} alt="Tarot card with white flower" height="300" width="325" />
                //         </div>
                        // <div class="box">
                        //     <img src={PinkCrystal} alt="Tarot card with white flower"  height="300" width="325" />
                        // </div>
                //         <div class="box">
                //             <img src={BlueCrystal} alt="Tarot card with white flower" height="300" width="325" />
                //         </div>
                //     </div>
                // </div>

                // <br/>
                // <br/>
                // <br/>
                // <br/>

                // <div className="landingPageAroma flex-container">
                //     <div className="flex-child">
                //         <h1 style={{textAlign: "center"}}>Aroma Therapy</h1>
                //     </div>
                //     <div className="flex-child">
                //         <video src={VideoOne} width="600" height="300" controls="controls" autoPlay={true} /> {/* Fix this  */}
                //     </div>
                // </div>
