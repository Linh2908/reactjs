import React, { useMemo, useRef, useState } from 'react';

const App = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const nameEle = useRef();
  
  const total = useMemo(() => (
    products.reduce((result, product) => result + product.price,0)
  ),[products])

  const handleClick = () => {
    setProducts(prev => [...prev, {
      name,
      price : +price
    }])

    setName(" ");
    setPrice(" ");
    nameEle.current.focus();

  }

  return (
    <div>
      <input
        value={name}
        placeholder="Name product..."
        ref={nameEle}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="Price product..."
        onChange={e => setPrice(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>

      <h1>Total : {total}</h1>

      {
        products.map((product,index) => (
          <div key={index}>
            {product.name} - {product.price}
          </div>
        ))
      }
    </div>
  );
}

export default App;
