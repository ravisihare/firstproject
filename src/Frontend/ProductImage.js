import React,{useState} from 'react'
import { TextField,Button,Grid,Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { postDataImage } from '../FetchNodeServcies';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    subdiv: {
      background: '#000',
      padding: 20,
      width: 700,
      marginTop: 50
  
    },
  });
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1.5px solid #FFF',
        borderRadius: 0
      },
      '&:hover fieldset': {
        borderColor: '#FFF',
  
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF',
  
      },
  
    },
  });
  const Input = styled('input')({
    display: 'none',
  });
  


export default function ProductImage(props) {
  const classes = useStyles();
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [icon, setIcon] = useState({ bytes: '', filename: '/image.png' })

  const handleIconChange = (event) => {

    setIcon({ bytes: event.target.files[0], filename: URL.createObjectURL(event.target.files[0]) })

  }

  const handleSubmit = async () => {
    var formData = new FormData()
    formData.append('productname', productName)
    formData.append('price', productPrice)
    formData.append('icon', icon.bytes)
    var result = await postDataImage('users/saveproduct', formData)
    alert(result.result)
}

  return (
    <div className={classes.root}>

    <div className={classes.subdiv}>
      <Grid container spacing={2} >
        <Grid item xs={12} style={{display:'flex',alignItems:'center', fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>
         Add Product Details
        
        </Grid>
        <Grid item xs={6}>
          <CssTextField variant="outlined" InputLabelProps={{
            style: { color: '#FFF' },
          }} inputProps={{ style: { color: "#FFF" } }} label="Product Name" onChange={(event) => setProductName(event.target.value)} fullWidth />

        </Grid>
        <Grid item xs={6}>
          <CssTextField variant="outlined" InputLabelProps={{
            style: { color: '#FFF' },
          }} inputProps={{ style: { color: "#FFF" } }} label="Product Price" onChange={(event) => setProductPrice(event.target.value)} fullWidth />

        </Grid>
        <Grid item xs={6} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <label htmlFor="contained-button-file">
            <Input onChange={(event) => handleIconChange(event)} accept="image/*" id="contained-button-file" multiple type="file" />
            <Button style={{ background: '#FFF', color: '#000', fontWeight: 'bold' }} variant="contained" component="span" fullWidth>
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={() => handleSubmit()} style={{ background: '#FFF', color: '#000', fontWeight: 'bold' }} variant='contained' fullWidth>Submit</Button>

        </Grid>
        

        
       

      </Grid>

    </div>

  </div>
  )
}
