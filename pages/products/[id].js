import { getProductById } from "../api/products";
import Layout from "../../components/LayoutElements/Layout";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { addToCart } from "../../redux/slices/cartSlice";
import styles from "../../styles/Product.module.css";
import { useState } from "react";
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const data = await getProductById(id);
  console.log(data);
  return {
    props: {
      product: JSON.parse(JSON.stringify(data)),
    },
  };
};

const colors = [
  { id: 1, value: "Blue" },
  { id: 2, value: "Green" },
  { id: 3, value: "Red" },
  { id: 4, value: "Brown" },
  { id: 5, value: "Gray" },
];
const sizes = [
  { id: 1, value: "XS" },
  { id: 2, value: "S" },
  { id: 3, value: "M" },
  { id: 4, value: "L" },
  { id: 5, value: "XL" },
];

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();
  const [currentColor, setCurrentColor] = useState(colors[0].id);
  const [currentSize, setCurrentSize] = useState(sizes[0].id);
  const [size, setSize] = useState(sizes[0].value);
  const [color, setColor] = useState(colors[0].color);
  let [quantity, setQuantity] = useState(1);
  const { variants, defaultColor, defaultSize } = product;

  const handleColor = (color) => {
    setCurrentColor(color.id);
    setColor(color.value);
  };
  const handleSize = (size) => {
    setCurrentSize(size.id);
    setSize(size.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const variant = { color, size };
    const selectedVariant = variants.filter(
      (vari) =>
        vari.defaultColor === variant.color && vari.defaultSize === variant.size
    );
    if (selectedVariant) {
      const dataToPass = {
        ...product,
      };
      delete dataToPass.variants;
      dataToPass.id = selectedVariant[0]._id;
      dataToPass.defaultColor = selectedVariant[0].defaultColor;
      dataToPass.defaultSize = selectedVariant[0].defaultSize;
      const { defaultSize, defaultColor, id, imageUrl, title, price } =
        dataToPass;
      dispatch(
        addToCart({
          defaultSize,
          defaultColor,
          id,
          imageUrl,
          title,
          price,
          quantity
        })
      );
      console.log(dataToPass);
      return dataToPass;
    }
  };
  return (
    <Layout>
      <Container maxwidth="sm">
        <Box className={styles.mainProduct} display="flex">
          <Box className={styles.mainProduct_images}>
            <img
              src={product.images}
              alt={product.title}
              className={styles.mainProduct_image}
            />
          </Box>
          <Box className={styles.mainProduct_info}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="h6" className={styles.productPrice}>
              {product.price.usd}$
            </Typography>
            <Typography variant="p">
              {product.category}/{product.subcategory}
            </Typography>
            <br />
            <Typography variant="p">Delivery to Azerbaijan</Typography>

            <Box>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                Features
              </Typography>
              <Box className={styles.customRadio}>
                <span>Colors :</span>
                {colors.map((color) => (
                  <Box
                    className={
                      styles.btn +
                      " " +
                      (currentColor === color.id ? styles.active : "")
                    }
                    key={color.id}
                    onClick={() => handleColor(color)}
                    style={{ backgroundColor: color.value }}
                  ></Box>
                ))}
              </Box>
              <Box className={styles.customRadio}>
                <span style={{ marginRight: "16px" }}>Sizes :</span>
                {sizes.map((size) => (
                  <Box
                    className={
                      styles.btn +
                      " " +
                      (currentSize === size.id ? styles.active : "")
                    }
                    key={size.id}
                    onClick={() => handleSize(size)}
                  >
                    <span style={{ fontSize: "12px", fontStyle: "bolder" }}>
                      {size.value}
                    </span>
                  </Box>
                ))}
              </Box>
              <Box className={styles.amountField} display="flex">
                <span>Amount :</span>
                <IconButton
                  onClick={
                    !quantity <= 0
                      ? () => setQuantity(--quantity)
                      : () => setQuantity(1)
                  }
                >
                  <RemoveOutlined />
                </IconButton>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    maxWidth: "40px",
                    maxHeight: "30px",
                    textAlign: "center",
                    fontSize: "1em",
                    marginTop: "5px",
                  }}
                />
                <IconButton onClick={() => setQuantity(++quantity)}>
                  <AddOutlined />
                </IconButton>
              </Box>

              <Box className={styles.productPrice}>
                Total Price : {product.price.usd * quantity} $
              </Box>
              <button onClick={handleClick}>Add to cart</button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ProductPage;
