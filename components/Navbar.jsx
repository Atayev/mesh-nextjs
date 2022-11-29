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

function Navbar() {
  const [lang, setLang] = useState(null);
  const open = Boolean(lang);
  const id = open ? "simple-popover" : undefined;
  const openLangMenu = (e) => {
    setLang(e.currentTarget);
  };
  const closeLangMenu = () => {
    setLang(null)
}

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
            onClick={openLangMenu}
            aria-describedby={id}
            className={open && styles.rose_simple}
          >
            <LanguageOutlinedIcon />
          </li>
          <Pop id={id} open={open} lang={lang} closeLangMenu={closeLangMenu} />
          
          
          <li>
            <SettingsOutlinedIcon />
          </li>
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
