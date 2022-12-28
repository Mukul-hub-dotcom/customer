import React from 'react'
import {  AppBar,Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import UserDetails from './UserDetails';

export const Navbar = () => {
  const [loading,setLoading] = React.useState(false);
  const Navbar = styled(AppBar)`
  background : 'gr';
  `
  const Btn = styled(NavLink)`
    margin-left : 20px;
    color : white;
    font-size : 20px;
    text-decoration : none;
    `

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

     fetch(`https://vast-red-mite-ring.cyclic.app/user/add`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  const deleteData = ()=>{
    fetch(`https://vast-red-mite-ring.cyclic.app/user/all`, {
      method: "DELETE"
    })
  //  getData()
  }




  return (
    <div style={{ display: "flex" }}>
      <Navbar position='static' > 
         <Toolbar>
          <Btn to="/" onClick={getUserData}>Fetch Data</Btn>
          <Btn to="/" onClick={deleteData}>Delete Data</Btn>
          <Btn to="/userDetails">User Details</Btn>

        </Toolbar>
        
       

       </Navbar> 
    </div>
  )
}