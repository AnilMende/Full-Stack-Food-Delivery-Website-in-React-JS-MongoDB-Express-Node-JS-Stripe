import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

     // state for the adding and removing the items
    const [cartItems, setCartItems] = useState({});

    // adding to cart
    const addToCart = (itemId) => {
        // if item is not present in the cartItems then
        // set the count to 1
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}));
        }
        // if item already exists then
        // increment the count to 1 to the existing count
        else{
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
        }
    }

    // removing from cart
    // if you want to remove then decrease the current count of that particular
    // item to 1 if the count will be 0, then it will get removed from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}));
    }

    useEffect(() => {
         console.log(cartItems);
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