import { useEffect, useState } from "react";
import agent from "../../agent";
import { Product } from "../../Models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
    
    // fetch("https://localhost:7076/api/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  }, []);
  // const addProduct = () => {
  //   setProducts((prevState) => [
  //     ...prevState,
  //     {
  //       id: prevState.length + 101,
  //       name: "products" + (prevState.length + 1),
  //       price: prevState.length * 100 + 100,
  //       brand: "any brand",
  //       description: "any description",
  //       pictureUrl: "https://picsum.photos/200",
  //     },
  //   ]);
  // };

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
