import { Box } from "@mui/material";
import styles from "../styles/Product.module.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductModal from "./ProductModal";
import { useState } from "react";
const ProductItem = ({
  imageUrl,
  title,
  price,
  id,
  defaultSize,
  defaultColor,
  variants,
}) => {
  const [open, setOpen] = useState(false);
  const productData = {
    imageUrl,
    title,
    price,
    id,
    defaultSize,
    defaultColor,
    variants,
  }
  const dispatch = useDispatch();

  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
      <Box
        className={styles.productItemNav}
        display="flex"
        justifyContent="center"
      >
        <button
          className={styles.productItemButton}
          onClick={() => setOpen(!open)}
        >
          Add to Cart
        </button>
        <ProductModal
          open={open}
          handleClose={() => setOpen(!open)}
          productData={productData}
        />
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
