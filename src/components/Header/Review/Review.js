import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import ReviewItems from '../../ReviewItems/ReviewItems';

const Review = () => {
        const [cart,setCart] = useState([])
        
    useEffect(()=>{
          const saveCart = getDatabaseCart();
          const productKeys =Object.keys(saveCart)
          const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pro => pro.key === key);
              product.quantity = saveCart[key]
            return product
          })
          setCart(cartProduct)

    },[])
    return (
        <div>
            <h1>Carts items : {cart.length}</h1>
            {
                cart.map(pro => <ReviewItems key={pro.key} product = {pro}></ReviewItems>)
            }
            
        </div>
    );
};

export default Review;