
import Box from '@mui/material/Box';
import styles from '../styles/Nav.module.css'
import Search from './Search';
import Link from 'next/link'

const Nav = () => {
    return (
        <Box className={styles.nav2}>
            <Box className={styles.first_nav}>
            <ul className={styles.menuContainer}>
                <li>News</li>
                <li>Woman</li>
                <li><Link href='/products?category=men'>Men</Link></li>
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