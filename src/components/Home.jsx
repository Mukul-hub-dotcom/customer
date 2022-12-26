import React,{useState} from 'react'

const Home = () => {
  const [users,setUsers] = useState([])
  const getData = async()=>{
    try {
      let res=await fetch(`http://localhost:8080/user/all`)
    let data=await res.json()
    console.log(data);
    setUsers(data)
      
    } catch (error) {
      console.log(error)
    }
    
  }
  React.useEffect(()=>{
    getData()
  },[])
  
  return (
    <div>{
      users.map((data)=>{
    
   
                 return <div>
                 <h4>{data.name.first + " " + data.name.last}</h4>
                 </div>
                 
                
        
       })

      }</div>
  )
}

export default Home