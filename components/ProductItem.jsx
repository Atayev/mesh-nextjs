import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Product.module.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ProductItem = ({ imageUrl, title, price }) => {

  console.log(price)

  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
      <Box
        className={styles.productItemNav}
        display="flex"
        justifyContent="center"
      >
        <button className={styles.productItemButton}>Add to Cart</button>
        <FavoriteOutlinedIcon />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
      </Box>
    </Box>
  );
};

export default ProductItem;
