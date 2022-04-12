import { useEffect, useState } from "react";
import { Spinner, Button, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./shop.css";

function Shop() {
  const [products, setProdcuts] = useState([]);
  const fetchAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProdcuts(json));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="my-3">shop page</h2>
        <div className="products-list row justify-content-center">
          {
            products && products.length ? (
              products.map((product) => {
                return (
                  <Card key={product.id} className="product col-3 m-2">
                    <CardImg
                      className="w-50 mx-auto mt-2"
                      variant="top"
                      src={product.image}
                    ></CardImg>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>price: {product.price} $</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        to={`/shop/${product.id}`}
                        className="btn btn-primary"
                      >
                        Show details
                      </Link>
                    </Card.Footer>
                  </Card>
                );
              })
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )
            // : "error, call customer service"}
          }
        </div>
      </div>
    </>
  );
}

export default Shop;
