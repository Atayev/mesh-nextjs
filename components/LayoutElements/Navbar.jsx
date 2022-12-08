import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from 'next/image'

import styles from "../../styles/Nav.module.css";

import Pop from "../Popover";
import CustomizedBagde from "./CustomizedBadge";

import {
  LanguageOutlined,
  SettingsOutlined,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
  LoginOutlined,
} from "@mui/icons-material/";

import LangMenu from "../PopMenus/LangMenu";
import SettingsMenu from "../PopMenus/SettingsMenu";

function Navbar() {
  const { cart, wishList } = useSelector((state) => state.cart);

  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [anchorEl, setAnchorEL] = useState(null);
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
            className={visible ? styles.rose_simple : undefined}
          >
            <LanguageOutlined />
          </li>
          <Pop
            visible={visible}
            anchorEl={anchorEl}
            closeMenu={toggleLangMenu}
            children={<LangMenu />}
            position={-35}
          />

          <li
            onClick={toggleSettingsMenu}
            className={isVisible ? styles.rose_simple : undefined}
          >
            <SettingsOutlined />
          </li>
          <Pop
            visible={isVisible}
            anchorEl={anchorEl}
            closeMenu={toggleSettingsMenu}
            children={<SettingsMenu />}
            position={-235}
          />
          <li>
            <CustomizedBagde content={wishList.length}>
              <FavoriteBorderOutlined />
            </CustomizedBagde>
          </li>
          <li>
            <CustomizedBagde content={cart.length}>
              <ShoppingBasketOutlined />
            </CustomizedBagde>
          </li>
          <li>
            <LoginOutlined />
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
