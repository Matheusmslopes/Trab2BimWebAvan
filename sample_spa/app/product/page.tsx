'use client';
import { useState, useEffect } from 'react'

const Tasks = ({}) => {
    const [productList, setProductList] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://127.0.0.1:3000/products')
          .then((res) => res.json())
          .then((data) => {
            setProductList(data)
            setLoading(false)
          })
      }, [])
     
      if (isLoading) return <p>Loading...</p>
      if (!productList) return <p>No list</p>
     
  return (
    <main className="h-screen">
        {productList.map(({_id, name, qtd, cat_id}) => (
            <p>{name}</p>
        ))}
    </main>
  );
};

export default Tasks;