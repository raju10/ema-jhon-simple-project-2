import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';
import Products from '../Products/Products';

const ProductDetail = () => {
    const {productKey} = useParams()
    const productInfo = fakeData.find(pd => pd.key === productKey)
    console.log(productInfo)
    return (
        <div>
            <h1>{productKey} this key product detail comming sooon...</h1>

           <Products showAddToCart={false} productInfo={productInfo}></Products> 
        </div>
    );
};

export default ProductDetail;