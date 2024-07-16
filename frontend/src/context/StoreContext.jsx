import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemID) =>{
         if(!cartItems[itemID]){
            setCartItems((prev) =>({...prev,[itemID]:1}))
         }
         else{
          setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
         }
    }

    const removeFromCart = (itemID) =>{
           setCartItems((prev)=> ({...prev,[itemID]:prev[itemID] - 1}))
    }

  // allows you to perform side effects in your components.

 // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    useEffect(() => {
        
        localStorage.setItem('cart-item' , JSON.stringify(cartItems));
       
    },[cartItems])
    
    const contextValue = {
              food_list,
              cartItems,
              setCartItems,
              addToCart,
              removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    ) 
}
export default StoreContextProvider;
