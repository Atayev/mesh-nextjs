import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../redux/slices/pageSlice";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const SettingsMenu = () => {

  const dispatch = useDispatch();
  const currency = useSelector((state) => state.pageSettings.curr);

  const [country, setCountry] = useState("Azerbaijan");

  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 3, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
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
  );
};

export default SettingsMenu;
