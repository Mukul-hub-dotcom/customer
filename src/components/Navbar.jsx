import React from 'react'
import { AppBar, Toolbar, styled, } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [loading,setLoading] = React.useState(false);

  const getUserData = () => {
    if(loading){
      alert("fetching already going on");
    }else{
      setLoading(true);
      fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => {
          console.log(res)
          return res.json()
        })
  
        .then((res) => handleData(res.results))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }
   
  }


  const handleData = (user) => {

     fetch(`http://localhost:8080/user/add`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  const deleteData = ()=>{
    fetch(`http://localhost:8080/user/all`, {
      method: "DELETE"
    })
  //  getData()
  }




  return (
    <div style={{ display: "flex" }}>
      <Navbar position='static' >
        <Toolbar>
          <Tabs to="/" onClick={getUserData}>Fetch Data</Tabs>
          <Tabs to="/" onClick={deleteData}>Delete Data</Tabs>
          <Tabs to="/userDetails">User Details</Tabs>

        </Toolbar>

      </Navbar>
    </div>
  )
}