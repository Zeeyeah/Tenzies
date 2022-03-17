import React from 'react';
export default function Box(props){


    return(
        <div className='container'>
            <h1> Tenzies </h1>
            <p> Roll until all Dice are the same.
                Press the number to freez the value 
                of the Dice.
                 </p>
                 <div className='box-wrapper'>
           {props.box}

                 </div>
                 <div className= "Button" onClick={props.onClick}>
            <h2>
                Roll
            </h2>
            </div>
        </div>
    )
}