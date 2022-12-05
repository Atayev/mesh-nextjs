import Popover from "@mui/material/Popover";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../redux/slices/pageSlice";
import { useState } from "react";

const PopSettings = ({ visible, anchorEl, closeMenu }) => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.pageSettings.curr);
  const [country, setCountry] = useState("Azerbaijan");
  console.log(country);

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };
  return (
    <Popover
      open={visible}
      anchorEl={anchorEl}
      onClose={closeMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: -235,
      }}
    >
      <div>
        <FormControl variant="standard" sx={{ m: 3, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Country
          </InputLabel>
          <Select value={country} onChange={changeCountry} label="Country">
            <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
            <MenuItem value="Russia">Russia</MenuItem>
            <MenuItem value="Turkey">Turkey</MenuItem>
          </Select>
          <FormLabel id="currency">Currency</FormLabel>
          <RadioGroup
            aria-labelledby="currency"
            name="currency"
            value={currency}
            onChange={(e) =>
              dispatch(
                setCurrency({
                  curr: e.target.value,
                })
              )
            }
          >
            <FormControlLabel value="usd" control={<Radio />} label="USD" />
            <FormControlLabel value="azn" control={<Radio />} label="AZN" />
          </RadioGroup>
        </FormControl>
      </div>
    </Popover>
  );
};

export default PopSettings;
