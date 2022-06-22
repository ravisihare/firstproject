import React from 'react';
import {  makeStyles,Avatar,Button } from "@material-ui/core"

export default function CardButton(props) {
   
    const [qty,setQty]=React.useState(props.value)
  
    const handlePlus=()=>{
    var v=qty+1;
    if(v<10)
    setQty(v)
    props.onChange(v)

    }

    const handleMinus=()=>{
        var v=qty-1;
        if(v>=0)
        setQty(v)
        props.onChange(v)
    
        }

    return(
        <>
        {qty==0?  <div style={{display:'flex',alignItems:'center',padding:5,margin:2}}><Button style={{width:250,background:'#000',color:'#fff'}} onClick={()=>handlePlus()} variant='contained' >Add to Cart</Button></div>:
        <div style={{display:'flex',alignItems:'center',padding:5,margin:2}}>
   <Avatar style={{ background:'#ff726f',color:'#fff',marginRight:10}} onClick={()=>handleMinus()} variant ="square">
       -
   </Avatar>
   <span>
       {qty}
   </span>

   <Avatar style={{ background:'lightgreen',color:'#fff',marginLeft:10}} onClick={()=>handlePlus()} variant ="square">
       +
   </Avatar>
        </div>}
        </>
    )
}