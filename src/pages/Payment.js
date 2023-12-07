import React from 'react'
import './Payment.css'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <div className='payment'>
            <div className="content d-flex flex-column align-items-center container">
                <div className="payment-content fs-1 p-3 text-center">
                    PAYMENT
                </div>
                <h3 className='mt-2'>SELECT MODE OF PAYMENT</h3>
            </div>
            <div className="row-lg-12 mt-4">
                <div className="col-lg-12 d-flex p-2">
                    <Link to='creditcard' className="payment-method col-lg-4 d-flex flex-column align-items-center">
                        <img src="./img/card1.png" alt="" className='card-payment position-relative' />
                        <h4 className='position-absolute label-method text-white px-2'>Pay with Credit Card</h4>
                    </Link>
                    <Link to='upi' className="payment-method col-lg-4 d-flex flex-column align-items-center">
                        <img src="./img/card2.png" alt="" className='card-payment position-relative' />
                        <h4 className='position-absolute label-method text-white px-2'>Pay with UPI</h4>
                    </Link>
                    <Link to='/' className="payment-method col-lg-4 d-flex flex-column align-items-center">
                        <img src="./img/card3.png" alt="" className='card-payment position-relative' />
                        <h4 className='position-absolute label-method text-white px-2'>Cash-on Delivery</h4>
                    </Link>
                </div>
            </div>
            {/* <img src={Footer1} alt="" className='foot' /> */}
        </div>
    )
}

export default Payment
