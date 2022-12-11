import ProductItem from "../../components/ProductItem";
import { Container, Box } from "@mui/material";
import styles from "../../styles/Product.module.css";
import DividerCustom from "../../components/LayoutElements/Divider";
import Link from 'next/link'
// export const getStaticPaths = async () => {
//   await initMongoose(); 
//   const data = await getAllProducts();
//   const paths = data.map((product) => {
//     return {
//       params: {
//         id:product.id.toString()
//       }
//     }
//   })
//   return {
//     paths,
//     fallback:false
//   };
// };




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
          <Link href={`/products/${product._id}`} className={styles.link}>
          <ProductItem
            key={product._id}
            id={product._id}
            imageUrl={product.images}
            title={product.title}
            price={product.price.azn}
            defaultColor={product.defaultColor}
            defaultSize={product.defaultSize}
            variants={product.variants}
          />
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Products;
