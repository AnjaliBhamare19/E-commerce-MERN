import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
   const {food_list,removeFromCart} = useContext(StoreContext);
  const [cartItems , setCartItem] = useState({});

  useEffect(()=>{
      let sesstionvalue = localStorage.getItem('cart-item');
      setCartItem(JSON.parse(sesstionvalue));
  },[])
  return (
    <div className='cart'>
      <div className='cart-items'>
         <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
         </div>
         <br />
         <hr />
         {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              
              return(
                <>
                <div className='cart-items-title cart-items-item' >
                   <p>{item.name}</p>
                </div>
                </>
              )
            }
         })}
      </div>
    </div>
  )
}

export default Cart