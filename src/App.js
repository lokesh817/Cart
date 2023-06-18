import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { db } from './firebaseConfig'; 

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products:[],
      loading:true      
    };
  }
  componentDidMount(){
    this.getProducts();
  }
  async getProducts() {
    try {
      db.collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
    } catch (error) {
      console.log('Error getting products:', error);
    }
  }
  handleIncreaseQty=(product)=>{
      const { products }=this.state;
      const index = products.indexOf(product);
      const docRef=db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty: products[index].qty+1
      })
      .then(()=>{
        console.log('Updated Succesfully')
      })
      .catch((error)=>{
        console.log('error:',error);
      })
  }
  handleDecreaseQty=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      const docRef=db.collection('products').doc(products[index].id);
      if(products[index].qty >0){
        docRef
        .update({
          qty: products[index].qty-1
        })
        .then(()=>{
          console.log('Updated Succesfully')
        })
        .catch((error)=>{
          console.log('error:',error);
        })
      }
      
  }
  handleDeteleProduct=(id)=>{

    const docRef=db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('Delete Successfully');
    })
    .catch((error)=>{
      console.log('Error:',error);
    })
  }
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartAmount =()=>{
    const {products}= this.state;
    let CartTotal=0;
    products.map((product)=>{ return CartTotal=CartTotal+product.qty*product.price;})
    return CartTotal;
  }
  addProduct=()=>{
    db.collection('products')
    .add({
      img:'',
      price:900,
      qty:3,
      tittle:'default product'
    })
    .then((docRef)=>{
      console.log('Default product is been added',docRef);
    })
    .catch((error)=>{
      console.log("Error: ",error);
    })
  }
  render () {
    const { products,loading } =this.state;
  
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:20,font:20}}>Add Product</button>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQty}
          onDecreaseQuantity={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeteleProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={ {padding: 10, fontSize: 20 } }>Total: {this.getCartAmount()}</div>
      </div>
    );
  }
}
export default App;
