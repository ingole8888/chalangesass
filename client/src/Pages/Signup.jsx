import { useContext, useState } from "react";
import React from 'react'
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Link } from 'react-router-dom'
import { Box, Text } from "@chakra-ui/react";

const userLogin = ({ data }) => {
  return fetch("https://assback.onrender.com/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const initialState = {
  email: "",
  password: ""
}

const Signup = () => {
  const [data, setData] = useState(initialState)
  const { loginUser, isAuth } = useContext(AuthContext)

  const handlChange = (e) => {
    const { name: key, value } = e.target
    setData({
      ...data,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    userLogin({ data }).then(res => res.json()).then(res => {
      loginUser(data.email, res.token)
      console.log(res.token)
      if(res.message==="User alredy exists"){
        alert("user already in use use different userid ")
      }
    }).catch(err => {
      console.log(err)
    })

  }
  return (
    <>
    <Box>
      <Text fontSize={"30px"}>For Admin use this cred email="admin@gmail.com" password="12345" Else you logged in as user </Text>
    </Box>
    <div style={{border:"2px solid", width:"35%", margin:"auto", padding:"30px"}}>
          <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input style={{border:"1px solid", marginBottom:"20px", padding:"10px" }} data-testid="email-input" onChange={handlChange} name="email" value={data.email} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input style={{border:"1px solid", marginBottom:"20px", padding:"10px"}}
              data-testid="password-input"
              type="password"
              name="password"
              value={data.password}
              placeholder="password"
              onChange={handlChange}
            />
          </label>
        </div>
        <div>
          <input style={{border:"1px solid", marginBottom:"20px", padding:"10px"}} data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
        <Link to="/login">login here</Link>
      </form>
      
    </div>
    </>
  )
}

export default Signup