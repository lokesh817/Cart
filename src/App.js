import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebaseConfig'; 

class App extends React.Component {
  constructor () {
    super();
    // initializeApp(firebaseConfig);
    // this.db = getFirestore();
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
      // const productsCollection = collection(this.db, 'products');
      // const snapshot = await getDocs(productsCollection);
      // const productList = snapshot.docs.map(doc => {
      //   const data = doc.data();
      //   data.id = doc.id;
      //   return data;
      // });
      db.collection("products")
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });

      // this.setState({ products: productList, loading: false });
    } catch (error) {
      console.log('Error getting products:', error);
    }
  }
  handleIncreaseQty=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty += 1;
      this.setState({products})
  }
  handleDecreaseQty=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty >0){
          products[index].qty -= 1;
      }
      this.setState({products});
  }
  handleDeteleProduct=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id);
      this.setState({
          products:items
      }); 
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
  render () {
    const { products,loading } =this.state;
  
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
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
