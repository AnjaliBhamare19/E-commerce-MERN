import React, { useContext } from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets'
import StarRating from '../StarRating/StarRating'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} =  useContext(StoreContext);
  return (
    <div className='food-item'>
       <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=''/>
        {!cartItems[id]
           ?
           <img 
           className='add' src={assets.add_icon_white}
           onClick={()=>addToCart(id)} />

           :<div className='food-item-counter'>

              <AddIcon 
                style={{ fontSize: 25 , color: 'rgb(79, 185, 79)'}}  
               onClick={()=>addToCart(id)}
               />

              <p>{cartItems[id]}</p>

              <RemoveIcon 
              style={{ fontSize: 25, color: 'red'}}  
              onClick={()=>removeFromCart(id)} />

           </div>

        }
       </div>
       <div className='food-item-info'>
           <div className='food-item-name-rating'>
               <p>{name}</p>
               <StarRating />
           </div>
           <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>Rs.{price}</p>
       </div>
       
    </div>
  )
}

export default FoodItem