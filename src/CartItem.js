import React from "react";
class CartItem extends React.Component{
    
    // decreaseQty = ()=>{
    //     this.setState((prevState)=>{
    //         if(prevState.qty>0){
    //             return { qty : prevState.qty - 1};
    //         }
    //     })
    // }
    // deleteComponent =()=>{
    //     //functionality is to be implemented
    // }
    
    render(){
        console.log('this.props', this.props);
        const { price, title, qty, id } = this.props.product;
        const { product, onIncreseQty, onDecreseQty, onDeleteProduct } =this.props;
        return(
            <div className= "cart-item">
                <div className= "left-block">
                    <img style={style.image}/>
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
                            onClick={()=>onIncreseQty(product)}    
                        />
                        <img 
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            onClick={()=>onDecreseQty(product)} 
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