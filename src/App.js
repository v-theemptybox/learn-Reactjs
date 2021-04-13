import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';


function App() {
  const [cartItem, setCartItem] = useState(0,[]);
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://localhost:3000/productItems.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <Navbar cartItem={cartItem}></Navbar>
      <Carousel></Carousel>
    {
      data && data.length>0 && data.map((item)=><p>{item.name}</p>)
    }
      <Card pList={data}></Card>
      
      
    </div>
  );
}

export default App;
