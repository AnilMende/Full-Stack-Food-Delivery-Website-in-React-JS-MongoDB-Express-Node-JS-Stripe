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

    // to check the cartItems we are using the useEffect
    // useEffect(() => {
    //      console.log(cartItems);
    // },[cartItems])

    // To caluculate the total cart value
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            // if the count of particular item is greater than 0 then we can add
            if(cartItems[item] > 0){
                // first we need the price of that particular item, using the food_list
                // by using this we can get complete object of that particular item
                // so we can access properties of the object
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
                // cartItems[item] to get the quantity
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
        getTotalCartAmount
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;