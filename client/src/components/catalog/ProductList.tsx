import { Product } from "../../Models/product";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} md={3} key={product.id}>
          <ProductCard
          id={product.id}
          name={product.name}
          price={product.price}
          pictureUrl={product.pictureUrl}
          brand={product.brand}
          type={product.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;


