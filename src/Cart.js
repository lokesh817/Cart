import React from "react";
import CartIntem from "./CartItem";
class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
                <CartIntem />
                <CartIntem />
                <CartIntem />
            </div>
        )
    }
}
export default Cart;