// import React, { createContext, useEffect } from "react";
// import { useState } from "react";
// import all_product from '../Components/Assets/all_product'

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
    
//     let cart = {};                                                    // empty array
//     for (let index = 0; index < all_product.length; index++) {        // iteration
//         cart[index] = 0;                                              // initialization
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {
   
//     const [CartItems, setCartItems] = useState(getDefaultCart());

//     // const  getProducts = async () => {
//     //     let req = await fetch("http://localhost:3000/")
//     //     let products = await req.json()
//     //     console.log(products)
//     //     setCartItems(products);
//     // }

//     // useEffect(() => {
//     //     getProducts()
//     // }, [])

//     const addToCart = async(itemId) => {
//         setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))    // (key:val) pair, wher key(id of the product) & val(count of product added to the card with curr.id or key), whenever this function is called the product count gets increased
//     }
//     const removeFromCart = (itemId) => {
//         setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     const moveToCheckout = (itemId) => {
//         setCartItems((prev) =>({...prev,[itemId]:prev[itemId]}))
//     }

//     const totalCartAmount = () => {
//         let totalAmount = 0;
//         for(const item in CartItems) {
//             if(CartItems[item]>0) {
//                 let itemInfo = all_product.find((product) => product.id===Number(item));
//                 totalAmount += CartItems[item] * itemInfo.new_price;
//             }
//         }
//         return totalAmount;
//     }

//     const CartCount = () => {
//         let totalItems = 0;
//         for(const item in CartItems) {
//             if(CartItems[item] > 0) {
//                 totalItems += CartItems[item];
//             }
//         }
//         return totalItems;
//     }

//     const contextValue = {CartCount,totalCartAmount, all_product, CartItems, addToCart, removeFromCart, moveToCheckout};

//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;


//    const addToCart = async(itemId) => {
//     setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))    
// } 

// above code defines an asynchronous function called addToCart, which updates a state object representing items in a shopping cart. Let's break it down step by step:

// 1. const addToCart = async (itemId) => { ... }
// This defines an asynchronous arrow function named addToCart that takes a single argument, itemId.
// async indicates that the function may contain asynchronous operations, allowing you to use await within the function if needed. However, in this specific code, there are no await operations.

// 2. setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
// setCartItems is a function, likely provided by a state management hook like useState in React, used to update the state of cartItems.
// (prev) => { ... } is a function that takes the previous state (prev) as its argument and returns a new state object.

// 3. { ...prev, [itemId]: prev[itemId] + 1 }
// { ...prev } is using the spread syntax to create a new object that contains all the properties of the prev object. This ensures that the original prev object is not mutated.
// [itemId]: prev[itemId] + 1 is a computed property name. It updates the value associated with the itemId key by incrementing it by 1. If itemId does not exist in prev, this operation will result in NaN because undefined + 1 is NaN.


import React, { createContext, useEffect } from "react";
import { useState } from "react";
import all_product from '../Components/Assets/all_product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [CartItems, setCartItems] = useState({});

    // Fetch cart items from backend when the component mounts
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch("http://localhost:3000/cart");
                const data = await response.json();
                console.log("Fetched Cart Items:", data); // Add this
                setCartItems(data);
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };
        fetchCartItems();
    }, []);
    

    const addToCart = async(itemId) => {
        const updatedCart = { ...CartItems, [itemId]: (CartItems[itemId] || 0) + 1 };
        setCartItems(updatedCart);

        // Save the updated cart to the database
        await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCart)
        });

        toast('🦄 Product added to Cart!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const removeFromCart = async(itemId) => {
        if (CartItems[itemId] > 1) {
            const updatedCart = { ...CartItems, [itemId]: CartItems[itemId] - 1 };
            setCartItems(updatedCart);

            // Update the cart in the database
            await fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedCart)
            });
        } else {
            const { [itemId]: _, ...rest } = CartItems;
            setCartItems(rest);

            // Remove the item from the cart in the database
            await fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(rest)
            });
        }

        toast('🦄 Product removed from Cart!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const moveToCheckout = async(itemId) => {
        // Assuming checkout means retaining the item in the cart
        const updatedCart = { ...CartItems, [itemId]: CartItems[itemId] };

        setCartItems(updatedCart);

        // Save the cart for checkout
        await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCart)
        });
    }

    const totalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += CartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }

    const CartCount = () => {
        let totalItems = 0;
        for (const item in CartItems) {
            if (CartItems[item] > 0) {
                totalItems += CartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = { CartCount, totalCartAmount, all_product, CartItems, addToCart, removeFromCart, moveToCheckout};

    return (
        <ShopContext.Provider value={contextValue}>

             <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
