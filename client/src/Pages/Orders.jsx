import React, { useEffect, useState } from 'react'
import {
  Grid,Box,Text,Image, Flex,
  useColorModeValue,
 } from '@chakra-ui/react'
 import { Link } from "react-router-dom";

const Orders = () => {

  const [data, setdata] = useState([])

  useEffect(()=>{
    fetch(`https://assback.onrender.com/products`)
    .then((res)=>res.json())
    .then((data)=>{
        setdata(data)
    })
})
console.log(data)

  return (
     <>
<Box bg={useColorModeValue('gray.500', 'gray.900')} px={4} margin={"auto"}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <Link to="/a">Go Back</Link>
        </Flex>
    </Box>

    <Grid width={"90%"} margin={"auto"} 
    marginTop={"30px"}
    templateColumns='repeat(4, 1fr)' gap={2} backgroundColor={"#A8CAC6"}>
      
{ data?.map((e)=>(
  
  <Box w={"22vw"} margin="auto" marginBottom={"30px"} h={"40vh"} alignItems={"center"}
   key={e._id}>
    <Image width={"100%"} height={"70%"} src={e.image}/>
    <Text>Name: {e.title}</Text>
    <Text>RS: {e.price}</Text>
    <Text>Quantity: {e.quantity}</Text>
  </Box>
))}
</Grid>
</>
  )
  
}

export default Orders