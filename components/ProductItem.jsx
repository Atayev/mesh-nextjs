import { Box } from "@mui/material";
import styles from "../styles/Product.module.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { toast } from "react-toastify";

=======
import { addToCart } from "../redux/slices/cartSlice";
import {toast} from 'react-toastify'
>>>>>>> 28bf326198845bd93704ef2dee3fbb8587845b36
const ProductItem = ({ imageUrl, title, price, id }) => {
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(
      addToCart({
        id,
        title,
        imageUrl,
        price,
      })
    );
    toast.success("Product succesfully added to your cart ");
  };

  return (
    <Box className={styles.productItem}>
      <img src={imageUrl} alt="title" />
      <Box
        className={styles.productItemNav}
        display="flex"
        justifyContent="center"
      >
        <button className={styles.productItemButton} onClick={handleDispatch}>
          Add to Cart
        </button>
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
