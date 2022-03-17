import React from 'react';

export default function Dice(props){


    const styles = {
        backgroundColor: props.isHeld ?  '#358873' : '#8DC3A7'
    }

return(

<div className='Box' 
style={styles}
onClick ={props.onClick}
>{props.value}</div>



)
}


