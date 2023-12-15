import React ,{ useEffect, useState }from 'react';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import style from "./style.module.css"
import { Box, Button, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [data, setdata] = useState([])
    const stripe = useStripe();
    const elements = useElements();
const navigate=useNavigate()


const getdata =()=>{
    fetch(`https://assback.onrender.com/cart`)
    .then((res)=>res.json())
    .then((data)=>{
        setdata(data)
    })
  }
  useEffect(()=>{
    getdata()
})


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

alert("order placed successfully");

    };


    var total = data.reduce((acc, c) => acc + c.quantity * c.price, 0);

    return (
        <form onSubmit={handleSubmit} className={style.paymentMain}>
            <Text>Pay Rs:{total} from Your wallet</Text>
            <CardElement  />
            <Button backgroundColor={"#f6895f"} color={"white"} type="submit" disabled={!stripe || !elements}>
                Pay
            </Button>
            <Box><Link to="/">Go Back to Dashboard</Link></Box>
        </form>
    );
};

export default PaymentForm