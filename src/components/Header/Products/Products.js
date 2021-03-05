import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = (props) => {
   // console.log(props)
    const {name,img,seller,category,price,key} = props.productInfo ;
   
    return (
        <div className="product-container">
            <div className="product-img">
               <img src={img} alt=""/>
            </div>
           <div className="product-info">
             <h4><Link to={"/product/"+key}>{name}</Link></h4>
             <p> <small id="bySeller">by : seller{seller}</small> <small>cetagorys : {category}</small> </p>
             <h4 id="productPrice">Price : ${price}</h4>
            { props.showAddToCart === true && <button onClick={()=> props.handelAddProduct(props.productInfo)} className="main-product-btn">add to cart</button>}
           </div>
            
        </div>
    );
};

export default Products;