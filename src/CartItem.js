import React from "react";
class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }
        
    }
    // arrow function itself bind do bind this menthod this keyword 
    increaseQty = ()=>{
        this.setState((prevState)=>{
            return { qty : prevState.qty + 1};
        });
    }
    decreaseQty = ()=>{
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return { qty : prevState.qty - 1};
            }
        })
    }
    deleteComponent =()=>{
        //functionality is to be implemented
    }
    render(){
        const { price, title, qty } = this.state;
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
                            onClick={this.increaseQty}    
                        />
                        <img 
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            onClick={this.decreaseQty}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
                            onClick={this.deleteComponent}
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