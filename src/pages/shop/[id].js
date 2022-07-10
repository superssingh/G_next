import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="showSlow">
      <p>Product: {id}</p>;
    </div>
  );
};

export default Product;
