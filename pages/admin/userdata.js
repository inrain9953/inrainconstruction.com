import { useEffect, useState } from 'react';

export default function UserData() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/hello');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Products</h1>
      {/* <ul>
        {products.map((product) => (
          <>
          <li key={product._id}></li>
          <li>{product.name}</li>
          <li>{product.email}</li>
          <li>{product.mobile}</li>
          <li>{product.message}</li>
          </>
        ))}
      </ul> */}
    </div>
  );
}
