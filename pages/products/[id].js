import { getProductById } from "../api/products";

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

const ProductPage = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h1>page</h1>
    </div>
  );
};

export default ProductPage;
