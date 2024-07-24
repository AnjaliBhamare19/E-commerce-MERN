import React, { useContext, useEffect, useState} from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { Form, Button, Row} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const { food_list, deleteFromCart, getTotalCartAmount } = useContext(StoreContext);
  const [cartItems, setCartItem] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let sesstionvalue = localStorage.getItem('cart-item');
    setCartItem(JSON.parse(sesstionvalue));
  }, [])
  return (
    <div className='cart' >
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {

            return (
              <>
                <div>
                  <div className='cart-items-title cart-items-item' >
                    <img src={item.image} alt='' />
                    <p>{item.name}</p>
                    <p>Rs. {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs. {item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => deleteFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                </div>
              </>
            )
          }
        })}
      </div>

      <Row className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>Rs. {30}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Rs. {getTotalCartAmount()+30}</b>
            </div>
            <Button variant='success' className='rounded-0 mt-4 py-2 px-3'
              onClick={()=> navigate('/order')}
            >
              Proceed To Checkout</Button>
          </div>
        </div>
        <div className='cart-promocode'>
             <Row>
              <p style={{color: 'rgb(85, 84, 84)'}}>If you have a PROMOCODE, enter here</p>
              <InputGroup className="mb-3 w-100" >
                <Form.Control
                  placeholder="promo code"
                  aria-label="promocode"
                  style={{ backgroundColor: '#e5e7eb' }} 
                  className='rounded-start'
                />
                <Button variant="dark" className='rounded-end'>
                  Apply
                </Button>
              </InputGroup>
            </Row> 
            {/* <div>
              <p>If you have a  PROMOCODE, enter here</p>
              <div className='cart-promocode-input'>
                <input type='text' placeholder='promocode'/>
                <button type='submit'>Submit</button>
              </div>
            </div> */}
          </div>
      </Row>
    </div>
  )
}

export default Cart