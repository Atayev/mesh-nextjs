import { Box, Container, Typography } from "@mui/material";
import DividerCustom from "../../components/LayoutElements/Divider";
import Layout from "../../components/LayoutElements/Layout";
import { useSelector } from "react-redux";
import styles from '../../styles/CartItem.module.css'
function Cart() {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Layout>
      <Container maxwidth="sm">
        <DividerCustom>Cart</DividerCustom>
        {cart.length <= 0 ? (
          <Typography variant="h5" align="center">There is no product in your cart</Typography>
        ) : (
                      cart.map((cartItem) => (
                          <Box display='flex'  className={styles.cartMain} >
                              <Box className={styles.imageSection}>
                                  <img src={cartItem.images} alt={cartItem.title} />
                              </Box>
                              <Box className={styles.infoSection}>
                                  <Typography variant='h6' >
                                      {cartItem.title}
                                  </Typography>
                              </Box>
                            </Box>
                        ))
        )}
      </Container>
    </Layout>
  );
}

export default Cart;
