import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Product.module.css";

const ProductItem = ({ imageUrl, title, price }) => {
  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
      <button className={styles.productItemButton}>Add to Cart</button>
      <Box display="flex" justifyContent="space-between">
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
      </Box>
    </Box>
  );
};

export default ProductItem;
