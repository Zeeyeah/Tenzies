import React from 'react';


export default function Won(props){
   
   const styles ={
       width: '120px'
   }
   
   return <div className='container' >
        <h2>You Won!</h2>
        <div 
        className='Button'
         style={styles}
         onClick = {props.onClick}
         >
            <h2>Play Again</h2>
        </div>
    </div>
}