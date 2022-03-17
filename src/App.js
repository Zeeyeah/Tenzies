import React from 'react';
import Box from './Box.js';
import Dice from './Dice.js';
import Won from './Won.js';
import './index.css';
import { nanoid } from 'nanoid';



export default function App()

{
    const [boxes, setBoxes] = React.useState(randomArray)
    const [tenzies, setTenzies] = React.useState(false)
    
    
    React.useEffect(()=>
       {
         const allHeld = boxes.every(box=> box.isHeld)
         const firstValue = boxes[0].value
         const allSame = boxes.every(box => box.value === firstValue)
        if (allHeld && allSame) {
           setTenzies(true)
           boxes.map(box=> box.isHeld= false)
           roll()
        }

       }, [boxes]
    )
    
    function randomArray(){
        const numArray = []
        for (let i = 0; i < 10; i++) {
            numArray.push(generateNewDie())
       }
       return numArray
   }
   
   function generateNewDie(){
       return {
        value: Math.ceil(Math.random() * 6 ) + 1,
    isHeld: false,
    id: nanoid()
    }
   }

   
   
   const boxElement = boxes.map(box => {
       return <Dice 
       value = {box.value} 
       key = {box.id}
       isHeld = {box.isHeld}
        onClick = {()=>toggleIsHeld(box.id)}
       />
    })
  
function roll(){
   if (!tenzies) {
       setBoxes(oldDice=> oldDice.map(die=>{
          return die.isHeld ? die : generateNewDie()
       })
           )
   } else{
       setTenzies(false)
       randomArray()
       
   }
}

function toggleIsHeld(id){
    
    
    setBoxes(prev => prev.map(value=>{

       return value.id === id ? {...value, isHeld: !value.isHeld}:
        value
     })
       
     )
    }







    return (
<div className= "App">
      
      
       {tenzies ? <Won onClick= {roll}/>:
       <Box box= {boxElement} onClick= {roll}/>}
</div>

    )
    
}