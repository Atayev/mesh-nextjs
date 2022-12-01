import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import Pop from "./Popover";
import Popover from "@mui/material/Popover";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch,useSelector } from "react-redux";
import {setCurrency} from '../redux/slices/pageSlice'
function Navbar() {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.pageSettings.curr)
  
  console.log(currency)
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [anchorEl, setAnchorEL] = useState(null);
  const [country, setCountry] = useState("Azerbaijan");


  const changeCountry = (e) => {
    setCountry(e.target.value);
  };

  console.log(country);
  const open = Boolean(visible);
  const openSettings = Boolean(isVisible);

  const toggleLangMenu = (e) => {
    setVisible(!visible);
    setAnchorEL(e?.currentTarget);
  };
  const toggleSettingsMenu = (e) => {
    setIsVisible(!isVisible);
    setAnchorEL(e?.currentTarget);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.first_nav}>
        <Link href="/">
          <Image src="/logo.png" width={75} height={75} alt="MeshqueLogo" />
        </Link>
        <ul>
          <li>
            <Link href="/shop" className={styles.rose}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/workouts">Workouts</Link>
          </li>
        </ul>
      </div>
      <div className={styles.second_nav}>
        <ul>
          <li
            onClick={toggleLangMenu}
            className={open ? styles.rose_simple : undefined}
          >
            <LanguageOutlinedIcon />
          </li>
          <Pop
            visible={visible}
            anchorEl={anchorEl}
            closeMenu={toggleLangMenu}
          />

          <li onClick={toggleSettingsMenu}>
            <SettingsOutlinedIcon />
          </li>
          <Popover
            open={openSettings}
            anchorEl={anchorEl}
            onClose={toggleSettingsMenu}
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
                <Select
                  value={country}
                  onChange={changeCountry}
                  label="Country"
                >
                  <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                  <MenuItem value="Russia">Russia</MenuItem>
                  <MenuItem value="Turkey">Turkey</MenuItem>
                </Select>
                <FormLabel id="currency">
                  Currency
                </FormLabel>
                <RadioGroup
                  aria-labelledby="currency"
                  name="currency"
                  value={currency}
                  onChange={(e) => dispatch(setCurrency({
                    curr:e.target.value
                  }))}
                >
                  <FormControlLabel
                    value="usd"  
                    control={<Radio />}
                    label="USD"
                  />
                  <FormControlLabel
                    value="azn"
                    control={<Radio />}
                    label="AZN"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Popover>
          <li>
            <FavoriteBorderOutlinedIcon />
          </li>
          <li>
            <ShoppingBasketOutlinedIcon />
          </li>
          <li>
            <LoginOutlinedIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
