import React from 'react';

const ReviewItems = (props) => {
    console.log(props)
    const {name,quantity,img} = props.product;
    return (
        <div style={{borderBottom:"1px solid lightGray"}}>
            <img src={img} alt=""/>
            <h4 style={{fontSize:"20px",color:"blue",fontWeight:"400"}}>{name}</h4>
            <p>Quantity : {quantity}</p>
            <br/>
            <button className="main-product-btn">Remove</button>
        </div>
    );
};

export default ReviewItems;