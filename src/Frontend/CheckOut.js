import React from 'react'
import Header from './Header'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    subdiv: {
      background: 'lightgrey',
      padding: 20,
      width: 700,
      marginTop: 200,
      color:'#000'
    },
  });
  

export default function CheckOut() {
    const classes=useStyles()
  return (
    <div>
        {<Header/>}

        <div className={classes.root}>
            <div className={classes.subdiv}>
                <h1 style={{display:'flex',justifyContent:'center',alginItems:'center'}}>CheckOut</h1>
                <h2>Thank You Visit Again.....</h2>
            </div>
        </div>


    </div>
  )
}
