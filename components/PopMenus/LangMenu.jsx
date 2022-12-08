import Image from "next/image";
import styles from "../../styles/Nav.module.css";
import { Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/pageSlice";

const LangMenu = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.pageSettings.lang);
  const handleChange = (e) => {
    dispatch(
      setLanguage({
        lang: e.target.value,
      })
    );
    closeMenu();
  };

  return (
    <Select className={styles.popup} onChange={handleChange} value={lang}>
      <MenuItem value="eng">
        <span>Eng</span>
        <Image
          src="/eng.png"
          width={20}
          height={20}
          className={styles.lang}
          alt="eng"
        />
      </MenuItem>
      <MenuItem value="aze">
        <span>Aze</span>
        <Image
          src="/aze.png"
          width={20}
          height={20}
          className={styles.lang}
          alt="aze"
        />
      </MenuItem>
      <MenuItem value="rus">
        <span>Rus</span>
        <Image
          src="/rus.png"
          width={20}
          height={20}
          className={styles.lang}
          alt="rus"
        />
      </MenuItem>
    </Select>
  );
};

export default LangMenu;
