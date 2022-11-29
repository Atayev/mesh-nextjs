import Popover from "@mui/material/Popover";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from '../styles/Nav.module.css'
import Image from "next/image";
const Pop = ({id,open,lang,closeLangMenu}) => {
   
    return ( 
        <Popover
            id={id}
            open={open}
            anchorEl={lang}
            onClose={closeLangMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: -20,
            }}
          >
            <div className={styles.popup}>
              <MenuItem value={10}>
                <span>Eng</span>
                <Image
                  src="/eng.png"
                  width={20}
                  height={20}
                  className={styles.lang}
                />
              </MenuItem>
              <MenuItem value={20}>
                <span>Aze</span>
                <Image
                  src="/aze.png"
                  width={20}
                  height={20}
                  className={styles.lang}
                />
              </MenuItem>
              <MenuItem value={30}>
                <span>Rus</span>
                <Image
                  src="/rus.png"
                  width={20}
                  height={20}
                  className={styles.lang}
                />
              </MenuItem>
            </div>
          </Popover>
     );
}
 
export default Pop;