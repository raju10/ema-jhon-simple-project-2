import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
     const cart = props.cart
     
     const total = cart.reduce((sum , total)=> sum + total.price,0)
    
     let shipping = 0
     if(total > 20){
         shipping = 20;
     }
     else if(total > 50){
         shipping = 0
     }

    //  let total = 0;
    //  for (let i=0; i< cart.length;i++){
    //      const product = cart[i]
    //      total = total + product.price
    //  }

    return (
        <div className="cart-container">
            <h2>Order Summery</h2>
            <h3>Items Order : {cart.length} </h3>
            <h4>total/product : {total}</h4>
            <h4>Shipping Cost :{shipping} </h4>
            <h4 id="totalCost">Your total cost :{total+shipping} </h4>
            <br/>
            <Link to="/review">
                 <button className="main-product-btn">Review Order</button>
            </Link>
           
        </div>
    );
};

export default Cart;