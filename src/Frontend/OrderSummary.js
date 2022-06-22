import React, { useEffect, useState } from 'react'
import { getData, ServerURL } from '../FetchNodeServcies';
import { makeStyles } from '@mui/styles';
import { Grid, Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import CardButton from './CardButton';
import { Navigate, useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Crimson',
    background: '#f6f6f7',
    

  },
  subdiv: {

    padding: 20,
    width: 1200,
    marginTop: 50,
  
  },
  one: {

    padding: 20,
    width: '95%',
    marginTop: 10,
    background: '#fff',
    borderRadius: '8px',


  },
  two: {

    padding: 20,
    width: '100%',
    background: '#fff',
    height: 100,
    borderRadius: '20px',
    fontFamily: 'Poppins',
    marginLeft: 20,

  },
  three: {
    borderRadius: '20px',
    padding: 20,
    marginTop: 20,
    width: '95%',
    background: '#fff',
    paddingLeft: 50,
    // height:200,
    fontFamily: 'Poppins',
    marginLeft: 20,
  },
  four: {
    textAlign: 'left',
    paddingLeft: 20,
    fontFamily: 'Poppins',
    marginLeft: 20,
  }
})


export default function OrderSummary() {
  const classes = useStyles();
  const [product, setProduct] = useState([])
  const [refresh, setRefresh] = useState(false)
var navigate=useNavigate()
  var dispatch = useDispatch()
  var products = useSelector((state) => state.product)
  var keys = Object.keys(products).length
  var listproducts = Object.values(products)
  const fetchAllProduct = async () => {
    var result = await getData('users/displayallproduct')
    setProduct(result.result)

  }
  useEffect(function () {
    fetchAllProduct()
  }, [])

  const handleClick=()=>{
    navigate('/checkout')
  }

  const handleQtyChange = (value, item) => {
    item['qty'] = value
    if (value > 0) {
      dispatch({ type: 'ADD_PRODUCT', payload: [item.productid, item] })
    }
    else {
      dispatch({ type: 'DEL_PRODUCT', payload: [item.productid] })
    }
    setRefresh(!refresh)
  }


  const showCartItems = () => {
    return listproducts.map((item, index) => {
      return (<>
        <div style={{ display: 'flex', justifyContent: 'left', marginTop: 10, padding: 20 }}>
          <img src={`${ServerURL}/images/${item.icon}`} style={{ width: 50, height: 50 }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right', fontFamily: 'Poppins', marginLeft: 10, marginTop: 10 }}>
            <div> {item.productname}</div>



          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', color: "#ef4281", fontWeight: 'bold', fontFamily: 'Crimson Pro', marginTop: 20, fontSize: 20, marginLeft: 50 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 14, color: '#000' }}> &#8377;{item.offerprice > 0 ? ((item.price - item.offerprice)).toFixed(2) : (item.price).toFixed(2)} x {item.qty}</div>

            <div> &#8377;{item.offerprice > 0 ? ((item.price - item.offerprice) * item.qty).toFixed(2) : (item.price * item.qty).toFixed(2)}</div>
          </div>
          <div style={{ marginLeft: 'auto' }}><CardButton value={item.qty} onChange={(value) => handleQtyChange(value, item)} /></div>
        </div>
      </>)
    })
  }



  return (
    <div>
      <div className={classes.root}>

        <div className={classes.subdiv}>
          <Grid container spacing={2}>

            <Grid item xs={7}>
              <div style={{ fontSize: 28, fontWeight: 'bold', fontFamily: 'Poppins', }}>
                ORDER SUMMARY
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <div style={{ width: '100%' }}>

                </div>
              </div>
              <div className={classes.one} >
                <div style={{ fontFamily: 'Poppins' }}>
                  PRODUCTS
                </div>
               
                  {showCartItems()}
              </div>
            </Grid>
            <Grid item xs={5}>
            
            </Grid>
            <Grid item xs={4}>
            <Button onClick={()=>handleClick()} style={{width:250,background:'#000',color:'#fff'}}  variant='contained' >Visit Again</Button>
            </Grid>

          </Grid>
        </div>
      </div>
    </div>
  )
}
