import React,{useEffect,useState} from 'react'
import CartButton from './CardButton'
import Header from './Header'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { getData,ServerURL } from '../FetchNodeServcies'
import { Button } from '@material-ui/core'
const useStyles = makeStyles({
  root: {

      justifyContent: 'center',
      alignItems: 'center',
      display:'flex',        
      flexDirection:'column'
     

  },
  subdiv: {
    
      padding: 15,
      width: '80%',
      marginTop: 50,
      height:300,
      border:'0.5px solid #95a5a6',
      borderRadius:2,
      margin:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
  }
})


export default function Menu () {
  const [refresh,setRefresh]=useState(false)
  const [product , setProduct]=useState([])
  var dispatch =useDispatch()
const classes=useStyles()

const navigate=useNavigate()

const handleClick=()=>{
  
  navigate('/ordersummary')
}

  const handleQtyChange=(value,item)=>{
    item['qty']=value
  if(value>0)
  {
  dispatch({type:'ADD_PRODUCT',payload:[item.productid,item]})
  }
  else
  {
    dispatch({type:'DEL_PRODUCT',payload:[item.productid]})
  }
  setRefresh(!refresh)
  }

  const fetchAllProduct=async()=>{
    var result=await getData('users/displayallproduct')
    setProduct(result.result)
  
   }
   useEffect(function(){
    fetchAllProduct()
    },[])

    const showProduct=()=>{
      return product.map((item,index)=>{
      return (
      <div>
      <div className={classes.subdiv}>
       
       <div style={{padding:10}}>
       <img  src={`${ServerURL}/images/${item.icon}`} style={{width:150,height:150}}/>
       </div>
       <div style={{width:240,fontFamily:'Sarabun',fontWeight:1000,fontSize:'larger', display:'flex',justifyContent:'left'}}>
        {item.productname}
       </div>
       <div style={{width:240,fontFamily:'Sarabun',fontWeight:1000,fontSize:'larger', display:'flex',justifyContent:'left',color:'lightgreen'}}>
       &#8377;{item.price}
       </div>
    
      
       <div style={{display:'flex',alignItems:'center',padding:2,margin:2}} fullWidth>
    <CartButton value={0} onChange={(value)=>handleQtyChange(value,item)} />
    </div>
      </div>
      </div>
         
      )
       
      })
         
      }
   

  return (
    <div>
        {<Header/>}
        <div style={{fontSize:32,fontFamily:'Sarabun',fontWeight:'bold',letterSpacing:1,display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'row',padding:10}}>
       Food Adda
      </div>


      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center',alginItems:'center'}}>
      {showProduct()}     
      </div>
      <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center',alginItems:'center'}} >
      <Button onClick={()=>handleClick()} style={{width:250,background:'#000',color:'#fff'}} variant='contained' >order summary</Button>
      </div>
    </div>
  )
}
