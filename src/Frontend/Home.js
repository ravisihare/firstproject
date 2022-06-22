import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
export default function Home() {
const navigate=useNavigate()

const handleClick=()=>{
  
  navigate('/menu')
}

  return (
    <div>
   {<Header/>}
   <div style={{display:'flex',justifyContent:'center',alginItem:'center',fontSize:50,marginTop:200}}>
    Welcome to Food's
    
   </div>
   <span style={{display:'flex',justifyContent:'center',alginItem:'center',fontSize:45}}>Kitchen</span>
   <div style={{display:'flex',justifyContent:'center',alginItem:'center',fontSize:45,marginTop:20}}> 
    <button onClick={()=>handleClick()} style={{ backgroundColor:'black',color:"white",fontSize:18,borderRadius:5,padding:'10px',cursor:'pointer'}}>GO TO Menu</button>
   </div>
   </div>
  )
}
