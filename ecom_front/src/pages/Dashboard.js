import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState();
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
      setData(response.data);
    } catch(error){
      console.log('error');
    }
  }


  return (
    <>
    <h1>Ecommerce data</h1>
    </>
    
  )
}

export default Dashboard;
