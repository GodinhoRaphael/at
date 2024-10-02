import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  ProgressBar,
} from "react-bootstrap";
import "./Carousel.css";
import Cart from "./Cart.jsx";
import Ipad from "./imgs/Apple Ipad.png";
import Sony_Headphone from "./imgs/Sony Headphone.png";
import MacBook_Air from "./imgs/Macbook Air.png";
import Nikon_DSLR from "./imgs/Nikon DSLR.png";
import Playstation from "./imgs/Playstation.png";
import Macbook_Pro from "./imgs/MacbookPro.png";
import Bose_Speaker from "./imgs/BoseSpeaker.png";
import Galaxy_S8 from "./imgs/GalaxyS8.png";
import Iphone from "./imgs/Iphone.png";
import Canon_DSLR from "./imgs/CanonDSLR.png";
import Google_Pixel from "./imgs/GooglePixel.png";
import Apple_Watch from "./imgs/AppleWatch.png";

export default function CarouselComponent({ addToCart }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const products = [
    {
      name: "Apple iPad",
      price: "$369.00",
      img: Ipad,
      discount: "$400.00",
      progress: 75,
    },
    {
      name: "Sony Headphone",
      price: "$23.99",
      img: Sony_Headphone,
      discount: "$25.00",
      progress: 55,
    },
    {
      name: "Macbook Air",
      price: "$649.00",
      img: MacBook_Air,
      discount: "$899.00",
      progress: 50,
    },
    {
      name: "Nikon DSLR",
      price: "$250.00",
      img: Nikon_DSLR,
      discount: "$315.00",
      progress: 25,
    },
    {
      name: "Sony PlayStation",
      price: "$269.00",
      img: Playstation,
      discount: "$289.00",
      progress: 80,
    },
    {
      name: "Macbook Pro",
      price: "$869.00",
      img: Macbook_Pro,
      discount: "$1099.00",
      progress: 15,
    },
    {
      name: "Bose Speaker",
      price: "$99.00",
      img: Bose_Speaker,
      discount: "$109.00",
      progress: 100,
    },
    {
      name: "Samsung Galaxy S8",
      price: "$569.00",
      img: Galaxy_S8,
      discount: "$599.00",
      progress: 95,
    },
    {
      name: "Apple iPhone",
      price: "$349.00",
      img: Iphone,
      discount: "$369.00",
      progress: 30,
    },
    {
      name: "Canon DSLR",
      price: "$250.00",
      img: Canon_DSLR,
      discount: "$315.00",
      progress: 5,
    },
    {
      name: "Google Pixel",
      price: "$418.00",
      img: Google_Pixel,
      discount: "$450.00",
      progress: 75,
    },
    {
      name: "Apple Watch",
      price: "$330.00",
      img: Apple_Watch,
      discount: "$350.00",
      progress: 45,
    },
  ];

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>
            Nossos <b>Produtos</b>
          </h2>
          <Carousel
            indicators={false}
            interval={3000}
            prevIcon={
              <span aria-hidden="true" className="carousel-control-prev-icon" />
            }
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon" />
            }
          >
            {chunkedProducts.map((productChunk, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {productChunk.map((product, index) => (
                    <Col xs={12} sm={6} md={3} key={index}>
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src={product.img}
                            className="img-fluid"
                            alt={product.name}
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>{product.name}</h4>
                          <p className="item-price">
                            <strike>{product.discount}</strike>{" "}
                            <span>{product.price}</span>
                          </p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <ProgressBar
                            now={product.progress}
                            className="custom-progress"
                          />
                          <div className="progress-label">{`${product.progress}%`}</div>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            variant="primary"
                          >
                            Adicionar no carrinho
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </Container>
  );
}
