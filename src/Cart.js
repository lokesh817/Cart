import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor () {
        super();
        this.state = {
            products:[{
                price: 1599,
                title: 'Smart Watch',
                qty: 2,
                img: '',
                id: 1
            },{
                price: 9999,
                title: 'Mobile Phone',
                qty: 1,
                img: '',
                id: 2
            },{
                price: 50000,
                title: 'Laptop',
                qty: 3,
                img: '',
                id: 3
            }]      
        }
        
    }
    handelIncreseQty=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty += 1;
        this.setState({products})
    }
    handelDecreseQty=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty >0){
            products[index].qty -= 1;
        }
        this.setState({products});
    }
    handelDeteleProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!=id);
        this.setState({
            products:items
        }); 
    }
    render(){
        const { products } = this.state
        return(
            <div className="cart">
                {products.map((product) =>{
                    return <
                        CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreseQty={this.handelIncreseQty}
                        onDecreseQty={this.handelDecreseQty}
                        onDeleteProduct={this.handelDeteleProduct}
                    />
                })}
            </div>
        )
    }
}
export default Cart;