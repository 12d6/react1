//import neccesary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Lizard from './images/liza.jpg';
import './index.css';
//create component
function Lizardd(){
    return(
        <div class='box1' >
        
         <img src = {Lizard} />
        
        <div class='box2'>
         <h1>Lizard</h1>
         <p><h3>lizards are wide spread group of squamate reptiles , with over 6000 species ,ranging across all comntinents except Antartica</h3></p>
         
         <a href='https://www.websiteplanet.com/webtools/sharelink/'>SHARE</a>
        
       
        <a href='https://en.wikipedia.org/wiki/Lizard'>LEARN MORE</a>
        </div>
         </div>
        

        
    )
    

}
 
//show it to user
//display
ReactDOM.render(
    <Lizardd/>,
    document.getElementById('root')
)