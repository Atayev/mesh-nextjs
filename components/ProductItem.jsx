import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Product.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductItem = ({ imageUrl, title, price }) => {
  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
      <Box className={styles.productItemNav}>
        <button className={styles.productItemButton}>ADD TO CART</button>
        <FavoriteBorderOutlinedIcon className={styles.favorite} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
      </Box>
    </Box>
  );
};

export default ProductItem;
