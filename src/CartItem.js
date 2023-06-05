import React from "react";
class CartIten extends React.Component{
    render(){
        return(
            <div className= "Cart-item">
                <div className= "left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="Cart-item-actions">  </div>
                </div>

            </div>
            
        );
    }
}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartIten;