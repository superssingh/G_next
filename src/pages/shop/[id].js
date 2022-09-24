import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="showSlow">
      <div>Product: {id}</div>;
    </div>
  );
};

export default Product;
