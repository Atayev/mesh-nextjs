import ProductItem from "../../components/ProductItem";
import { Container, Box } from "@mui/material";
import styles from "../../styles/Product.module.css";
import DividerCustom from '../../components/LayoutElements/Divider'
const Products = ({ products }) => {

  return (
    <Container maxwidth="xs">
      <DividerCustom>Bestsellers</DividerCustom>
      <Box
        className={styles.main}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {products?.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            imageUrl={product.images}
            title={product.title}
            price={product.price.azn}
            defaultColor={product.defaultColor}
            defaultSize={product.defaultSize}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Products;
