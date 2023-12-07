import React from 'react'
import './Address.css'
import { Link } from 'react-router-dom'

const Address = () => {
    return (
        <div className='address'>
            <div className="content d-flex flex-column align-items-center container">
                <div className="address-content fs-1 p-3 text-center">
                    ADDRESS
                </div>

                <form action="" className='text-white fs-3 col-lg-8 d-flex flex-column mt-3'>
                    <div className="flat mb-4">
                        <label htmlFor="flatNo" className='fs-2 flex-grow-1 col-lg-3'>Flat/door no</label>
                        <input name='flatNo' type="text" id='flatNo' />
                    </div>
                    <div className="flat mb-4">
                        <label htmlFor="street" className='fs-2 col-lg-3'>Street</label>
                        <input name='street' type="text" id='street' />
                    </div>
                    <div className="flat mb-4 d-flex">
                        <label htmlFor="town" className='fs-2 col-lg-3'>Town/City</label>
                        <div className="select" id='town'>
                            <select name="town" id="">
                                {/* <option selected disabled>Select</option> */}
                                <option value="1">Indonesia</option>
                                <option value="2">Indonesia</option>
                                <option value="3">Indonesia</option>
                            </select>
                        </div>
                    </div>
                    <div className="flat d-flex">
                        <label htmlFor="district" className='fs-2 col-lg-3'>District</label>
                        <div className="select" id='district'>
                            <select name="district" id="">
                                {/* <option selected disabled>Select</option> */}
                                <option value="1">Indonesia</option>
                                <option value="2">Indonesia</option>
                                <option value="3">Indonesia</option>
                            </select>
                        </div>
                    </div>

                    <div className="continue-btn d-flex justify-content-end">
                        <button className='button-coklat continue mt-5'>
                            <Link to="/payment" className='text-decoration-none text-black'>
                                Continue
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
            <img src="./img/footer1.png" alt="" className='foot' />
        </div>
    )
}

export default Address
