import React from "react";
const CartItem =(props)=>{
    const { price, title, qty, id } = props.product;
    const { 
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct, 
    } =props;
    return(
        <div className= "cart-item">
            <div className= "left-block">
                <img style={style.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">  
                {/* {Buttons} */}
                <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                    onClick={()=>onIncreaseQuantity(product)}    
                />
                <img 
                    alt="decrease"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                    onClick={()=>onDecreaseQuantity(product)} 
                />
                <img 
                    alt="delete" 
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
                    onClick={()=>onDeleteProduct(id)} 
                />
                </div>
            </div>
        </div>
    );
}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;