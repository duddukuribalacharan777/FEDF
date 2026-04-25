import { useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'

function App() {

  return (
    <div>
      <h1>Welcome to shop</h1>

    <ProductCard name="IPHONE" price={19.99} image="phone.png" />
    <ProductCard name="MAC BOOK" price={199.99} image="laptop.png" />
    <ProductCard name="APPLE HEADPHONES" price={19999.99} image="headphone.png" />
</div>
  );
}
export default App
