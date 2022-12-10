import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "../styles/Product.module.css";

import { useState } from "react";
import DividerCustom from "./LayoutElements/Divider";

function ProductModal({ defaultColor, defaultSize, open, handleClose }) {
    const [value,setValue] = useState(defaultColor)
    console.log(value)
    return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Features
        </Typography>
        <DividerCustom />
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Colors</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          >
            <FormControlLabel
              value="Blue"
              control={<Radio />}
              label="Blue"
            />
            <FormControlLabel value="Red" control={<Radio />} label="Red" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default ProductModal;
