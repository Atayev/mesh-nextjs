import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DividerCustom from "./LayoutElements/Divider";
import { toast } from "react-toastify";
import { addToCart } from "../redux/slices/cartSlice";

function ProductModal({ productData, open, handleClose }) {
  const dispatch = useDispatch();
  const { variants, defaultColor, defaultSize } = productData;
  const [color, setColor] = useState(defaultColor);
  const [size, setSize] = useState(defaultSize);
  const variant = { color, size };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedVariant = variants.filter(
      (vari) =>
        vari.defaultColor === variant.color && vari.defaultSize === variant.size
    );
    console.log(selectedVariant);
    if (selectedVariant) {
      const dataToPass = {
        ...productData,
      };
      delete dataToPass.variants;
      dataToPass.id = selectedVariant[0]._id;
      dataToPass.defaultColor = selectedVariant[0].defaultColor;
      dataToPass.defaultSize = selectedVariant[0].defaultSize;
      dispatch(addToCart({ dataToPass }));
      handleClose();
      console.log(dataToPass);
      return dataToPass;
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modal}>
        <Typography className={styles.modalTitle} variant="h6" component="h2">
          Features
        </Typography>
        <FormControl>
          <FormLabel className={styles.formLabel}>Colors</FormLabel>
          <RadioGroup value={color} onChange={(e) => setColor(e.target.value)}>
            <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
            <FormControlLabel value="Red" control={<Radio />} label="Red" />
            <FormControlLabel value="Green" control={<Radio />} label="Green" />
            <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
            <FormControlLabel value="Gray" control={<Radio />} label="Gray" />
          </RadioGroup>
          <FormLabel className={styles.formLabel}>Sizes</FormLabel>
          <RadioGroup value={size} onChange={(e) => setSize(e.target.value)}>
            <FormControlLabel value="XS" control={<Radio />} label="XS" />
            <FormControlLabel value="S" control={<Radio />} label="S" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="XL" control={<Radio />} label="XL" />
          </RadioGroup>
          <button type="submit" onClick={handleSubmit}>
            ADD
          </button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default ProductModal;
