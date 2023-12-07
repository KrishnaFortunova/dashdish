import React from 'react'
import './Cart.css'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import SharedState from '../Store'

const Cart = observer(() => {
    const empty = SharedState.cart.length === 0

    const Bill = () => {
        if (!empty) {
            return (
                <div className="w-100">
                    <table className='d-flex gap-4 text-white mt-4 fs-3 align-items-start col-lg-12 p-3'>
                        <tbody className='gap-4 text-white mt-4 fs-3 align-items-start col-lg-12 p-3'>
                            {SharedState.cart.map(product => {
                                return (
                                    <tr className='d-flex w-100'>
                                        <td className='product-name'>{product.name}</td>
                                        <td className='product-quantity'>{product.quantity}</td>
                                        {/* <div className="quantity-counter">
                                            <button className="food-quantity-button" onClick={() => SharedState.decQuantity(product.id)}>-</button>
                                            <input type="number" value={product.quantity} readOnly style={{ width: '30px' }} />
                                            <button className="food-quantity-button" onClick={() => SharedState.addQuantity(product.id)}>+</button>
                                        </div> */}
                                        <td className='product-price'>$ {product.price}</td>
                                        <td>
                                            <i className='bi bi-trash' onClick={() => SharedState.removeCart(product.id)} style={{ cursor: 'pointer' }}></i>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="divider col-lg-10 d-flex justify-content-end pe-5">
                        <div className="divide col-lg-6 me-5"></div>
                    </div>
                    <div className="divider col-lg-12 d-flex mt-2 fs-4 ps-4">
                        <div className="col-lg-5">
                        </div>
                        <div className="col-lg-5 d-flex flex ms-4 aling-items-start">
                            <div className="total d-flex flex-column col-lg">
                                <p className='title-note'>Total Amount</p>
                                <p className='title-note'>Discount</p>
                                <p className='title-note'>Taxes</p>
                            </div>
                            <div className="total d-flex flex-column col-lg nom text-white text-center fs-3">
                                <p className='title'>$ {SharedState.total}</p>
                                <p className='title'>$ 0</p>
                                <p className='title'>$ {SharedState.taxes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider col-lg-10 d-flex justify-content-end pe-5">
                        <div className="divide col-lg-6 me-5"></div>
                    </div>
                    <div className="divider col-lg-12 d-flex mt-2 fs-4 ps-4">
                        <div className="col-lg-5">
                        </div>
                        <div className="col-lg-5 d-flex flex ms-4 aling-items-start">
                            <div className="total d-flex flex-column col-lg text-center">
                                <p className='text-white'>Amount Payable</p>
                            </div>
                            <div className="total d-flex flex-column col-lg nom text-white text-center fs-3">
                                <p className='title'>$ {SharedState.total + SharedState.taxes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="d-flex align-items-center" style={{ height: '20rem', color: 'white', fontSize: '1.5rem' }}>
                    <b>Cart is empty</b>
                </div>
            )
        }
    }

    const ContinueButton = () => {
        if (!empty) {
            return (
                <button className='button-coklat'>
                    <Link to="/address" className='text-decoration-none text-black'>
                        Continue
                    </Link>
                </button>
            )
        }
    }

    return (
        <div className='cart'>
            <div className="content d-flex flex-column align-items-center container">
                <div className="cart-content fs-1 p-3 text-center">
                    CART
                </div>
                <Bill></Bill>
                <div className="button-group divider gap-4 d-flex mt-4 fs-4 ps-4 justify-content-center mt-3">
                    <button className='button-coklat'>
                        <Link to="/" className='text-decoration-none text-black'>
                            Back to menu
                        </Link>
                    </button>
                    <ContinueButton />
                </div>

            </div>
            <img src="./img/footer1.png" alt="" className='foot' />
        </div>
    )
})

export default Cart
