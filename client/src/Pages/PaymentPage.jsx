import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import PaymentForm from '../Components/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
  )
}

export default PaymentPage