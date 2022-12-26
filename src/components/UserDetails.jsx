import React from 'react'
import { useState,useEffect } from 'react'

const UserDetails = () => {
  const [users, setUser] = useState([])
  const [page, setPage] = React.useState(0)
  useEffect(() => {
    getData()
}, [page])

const getData = () => {
  fetch(`http://localhost:8080/user/all`)
      .then((res) => res.json())
      .then((res) => setUser(res))
}
  return (
    <div>{
      users[page] ? <div>
                <h4>{users[page].name.first}</h4>

                <h4>{users[page].location.city}</h4>
                <h4>{users[page].gender}</h4>
            </div> : null
            }
            <div>
                <button onClick={() => setPage(page - 1)}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
            
            
            </div>


  )
}

export default UserDetails