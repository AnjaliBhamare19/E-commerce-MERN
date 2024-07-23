import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const initialCartItems = JSON.parse(localStorage.getItem("cart-item")) || {};

    const [cartItems,setCartItems] = useState(initialCartItems);

    const addToCart = (itemID) =>{
         if(!cartItems[itemID]){
            setCartItems((prev) =>({...prev,[itemID]:1}))
         }
         else{
          setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}))
         }
    }

    // const removeFromCart = (itemID) =>{
    //        setCartItems((prev)=> ({...prev,[itemID]:prev[itemID] - 1}))
    // }
    const removeFromCart = (itemID) => {
        setCartItems((prev) => {
          const updatedCartItems = { ...prev };
          if (updatedCartItems[itemID] > 1) {
            updatedCartItems[itemID]--;
          } else {
            delete updatedCartItems[itemID];
          }
          return updatedCartItems;
        });
      };

      const deleteFromCart = (itemID) => {
        setCartItems((prev) => {
          const updatedCartItems = { ...prev };
          delete updatedCartItems[itemID];
          return updatedCartItems;
        });
      };

  // allows you to perform side effects in your components.

 // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    useEffect(() => {
        
        localStorage.setItem('cart-item' , JSON.stringify(cartItems));
       
    },[cartItems])

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems)  // Iterate over each item in the cartItems object
        {
        if(cartItems[item] > 0) //if items quantity is greator than zero
        {
          // Find the item in the food_list array that matches the current item's ID
          let itemInfo = food_list.find((product) => product._id === item);
          totalAmount += itemInfo.price *  cartItems[item];
        }
      }
      return totalAmount;
    }
    
    const contextValue = {
              food_list,
              cartItems,
              setCartItems,
              addToCart,
              removeFromCart,
              deleteFromCart,
              getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    ) 
}
export default StoreContextProvider;
