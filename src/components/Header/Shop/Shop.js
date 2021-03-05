import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const product = fakeData.slice(0,10);
   // const [product, setProduct] = useState(first10)
    
    const [cart,setCart] = useState([])
    
    const handelAddProduct = (prd) => {
                                                  // console.log( prd.key)
       const newCart = [...cart,prd];
                                                  // console.log( newCart)  
      setCart(newCart)

         const sameProduct = newCart.filter(pro => pro.key === prd.key)
         const count = sameProduct.length;
        addToDatabaseCart(prd.key ,count)
    }
    return (
        <div className="shop-container">
            <div>
                
                    {
                        product.map(pro => <Products key={pro.key} showAddToCart={true} productInfo = {pro} handelAddProduct={handelAddProduct}></Products>)
                     }
               
            </div>
           
          <div className="cart">
            <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;