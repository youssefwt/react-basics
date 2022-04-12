import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

const Product = () => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    product && (
      <div className="box">
        <div className="image-div">
          <img src={product.image} alt="" className="image" />
        </div>
        <div className="info-div">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Price: {product.price} $</strong>{" "}
          </p>
        </div>
      </div>
    )
  );
};

export default Product;
