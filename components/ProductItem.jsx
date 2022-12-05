import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Product.module.css";
<<<<<<< HEAD
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
=======
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
>>>>>>> fa08596c4303bcb36ef4eba4e3019d4ff49af7ce
const ProductItem = ({ imageUrl, title, price }) => {
  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
<<<<<<< HEAD
      <Box className={styles.productItemNav}>
        <button className={styles.productItemButton}>ADD TO CART</button>
        <FavoriteBorderOutlinedIcon className={styles.favorite} />
=======
      <Box
        className={styles.productItemNav}
        display="flex"
        justifyContent="center"
      >
        <button className={styles.productItemButton}>Add to Cart</button>
        <FavoriteOutlinedIcon />
>>>>>>> fa08596c4303bcb36ef4eba4e3019d4ff49af7ce
      </Box>
      <Box display="flex" justifyContent="space-between">
        <p className={styles.productTitle}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
      </Box>
    </Box>
  );
};

export default ProductItem;
