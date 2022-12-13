import { Box } from "@mui/material";
import styles from "../styles/Product.module.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductModal from "./ProductModal";
import { useState } from "react";
import Link from 'next/link'
const ProductItem = ({
  images,
  title,
  price,
  id,
  defaultSize,
  defaultColor,
  variants,
}) => {
  const [open, setOpen] = useState(false);
  const productData = {
    images,
    title,
    price,
    id,
    defaultSize,
    defaultColor,
    variants,
  }

  return (
    <Box className={styles.productItem}>
        <Link href={`/products/${id}`} className={styles.link}>
        <img src={images} alt="title" />
        </Link>
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
