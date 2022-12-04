
import Box from '@mui/material/Box';
import styles from '../styles/Nav.module.css'
import Search from './Search';


const Nav = () => {
    return (
        <Box className={styles.nav2}>
            <Box className={styles.first_nav}>
            <ul className={styles.menuContainer}>
                <li>News</li>
                <li>Woman</li>
                <li>Man</li>
                <li>Kids</li>
                <li>Outlet</li>
            </ul>
           </Box>
            <Box className={styles.search}>
                <Search />
           </Box>
        </Box>
    );
}
 
export default Nav;