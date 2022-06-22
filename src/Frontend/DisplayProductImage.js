import React,{useEffect} from 'react'
import MaterialTable from '@material-table/core'
import { getData,ServerURL } from '../FetchNodeServcies'



export default function DisplayProductImage() {
    const[product,setProduct]=React.useState([])

    const fetchAllProduct = async () => {
        var result = await getData("users/displayallproduct")
        alert(result.result)
        setProduct(result.result)
        
      }

      useEffect(function () {

        fetchAllProduct()
    
      }, [])

    function Display() {
        return (
          <MaterialTable
            title="Simple Action Preview"
            columns={[
              { title: 'Product ID', field: 'productid' },
              { title: 'Product Name', field: 'productname' },
              { title: 'Picture', field: 'icon',
              render: rowData => <img src={`${ServerURL}/images/${rowData.icon}`} style={{width: 50, borderRadius: '50%'}}/>
            },

              
             
            ]}
            data={product}        
            
          />
        )
      }

  return (
    <>
    {Display()}
    </>
    
  )
}
