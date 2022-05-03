import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userRequest } from '../../requestMethods';
import { Link } from 'react-router-dom';


const Success = () => {
    const location = useLocation();//to use the state passed upon payment in Cart component

    const data = location.state.data;
    const cart = location.state.products;
    const totals = location.state.totals;
    // console.log(data, cart);

    const currentUser = useSelector(state => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.map(item => ({
                        productId: item._id,
                        quantity: item.cartQuantity
                    })),
                    amount: totals.cartTotalPrice,
                    address: data.billing_details.address
                });

                setOrderId(res.data._id);

            } catch { }
        };

        data && createOrder();
    }, [cart, data, currentUser]);
    
    
  return (
      <div
        style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
      >

       {orderId ? `Your order has been created. Your order number is ${orderId}` : `Succesful! Your order is being created...`}

       <button
        style={{
            padding: 10, 
            marginTop: 20,
            border: "none",
            textTransform: "uppercase",
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            cursor: "pointer"
        }}
       ><Link to="/" style={{color: "white", textDecoration: "none"}}>Go To Homepage</Link></button>   
    </div>
  )
}

export default Success;