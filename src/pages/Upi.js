import './Upi.css'
import { Link } from 'react-router-dom'
import SharedState from '../Store'

const Upi = () => {
    return (
        <div className='upi'>
            <div className="content d-flex flex-column align-items-center container">
                <div className="upi-content fs-1 p-3 text-center">
                    PAYMENT
                </div>

                <div className="col-lg-12 wrapper d-flex gap-5">
                    <form action="" className='text-white fs-3 col-lg-8 d-flex flex-column mt-3'>
                        <div className="flat mb-4 d-flex flex-column">
                            <label htmlFor="upiId" className='fs-2 text-start'>UPI id</label>
                            <input name='upiId' type="text" id='upiId' className='w-100 input-text' />
                        </div>
                        <div className="wrap d-flex">
                            <div className="flat mb-4 d-flex flex-column col-lg">
                                <label htmlFor="pin" className='fs-2 text-start'>Pin</label>
                                <input name='pin' type="text" id='pin' className='w-50 input-text' />
                            </div>
                        </div>

                        <div className="input-checkbox d-flex align-items-center px-5 mt-5">
                            <input type="checkbox" id='checkbox' />
                            <span className='checkbox-lbl ms-3 fs-5'>Save this account for later use</span>
                        </div>

                        <div className="continue-btn d-flex justify-content-end">
                            <button className='button-coklat continue mt-5'>
                                <Link to="/payment" className='text-decoration-none text-black'>
                                    Pay Now
                                </Link>
                            </button>
                        </div>
                    </form>

                    <div className="payment-summary d-flex flex-column align-items-center col-lg-3">
                        <div className="wrap-nota p-3">
                            <div className="nota text-center d-flex flex-column">
                                <span className='fs-3 pay-amount mt-3'>
                                    Amount to <br /> Pay
                                </span>
                                <span className='fs-3 mt-4'>
                                    Total items
                                </span>
                                <span className='fs-5 nominal'>
                                    {SharedState.cart.length}
                                </span>
                                <span className='fs-3 mt-4'>
                                    Total amount
                                </span>
                                <span className='fs-5 nominal mb-3'>
                                    $ {SharedState.total + SharedState.taxes}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./img/footer1.png" alt="" className='foot' />
        </div>
    )
}

export default Upi
