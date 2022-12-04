import ProductItem from "../../components/ProductItem";
import { Container, Box } from "@mui/material";
import styles from "../../styles/Product.module.css";

const Products = ({ products }) => {
  console.log(products);
  return (
    <Container maxwidth="sm">
      <Box className={styles.main} display="flex" flexWrap='wrap'>
        {products?.map((product) => (
            <ProductItem
                key={product.id}
            imageUrl={product.images}
            title={product.title}
            price={product.price.azn}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Products;
