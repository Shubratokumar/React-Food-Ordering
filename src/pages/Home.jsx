import React, { useState, useEffect } from "react";
import Helmet from "./../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Category from "./../components/UI/category/Category";
import ProductCard from "./../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products.js";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from './../components/UI/slider/TestimonialSlider';

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta?",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta?",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta?",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [ hotPizza, setHotPizza ] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0,4);
    setHotPizza(slicePizza);
  }, [])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (product) => product.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (product) => product.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (product) => product.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Meet easy way to make order foods</h5>
                <h1 className="mb-4 hero_title">
                  <span>Hungry?</span> Just make an order. Food will at{" "}
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates illum laboriosam quod repellat inventore laudantium
                  vel tempora corporis nulla.
                </p>
                <div className="hero_btns d-flex align-items-center gap-4 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    {" "}
                    Order Now <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-caravan-line"></i>
                    </span>
                    No Shipping Charges
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% Secured Checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category></Category>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle">What we serve</h5>
              <h2 className="feature_title">Just sit back at your home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, fugiat?
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, fugiat?
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3 "
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="feature_text">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button className={`all_btn ${category === 'ALL' ? "foodBtnActive" : ""}`}
                    onClick={()=> setCategory('ALL')}
                >All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? "foodBtnActive" : ""}`}
                    onClick={()=> setCategory('BURGER')}
                >
                  <img src={foodCategoryImg01} alt="Burger" />
                  Burger
                </button>
                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? "foodBtnActive" : ""}`}
                    onClick={()=> setCategory('PIZZA')}
                >
                  <img src={foodCategoryImg02} alt="Pizza" />
                  Pizza
                </button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? "foodBtnActive" : ""}`}
                    onClick={()=> setCategory('BREAD')}
                >
                  <img src={foodCategoryImg03} alt="Bread" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item, index) => (
              <Col lg="3" md="4" key={index} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <img src={whyImg} alt="why-tasty-foods" className="w-100"/>
                </Col>
                <Col lg="6" md="6">
                    <div className="why_tasty-foods">
                        <h2 className="tasty_foods-title mb-4">Why <span>Tasty Foods?</span></h2>
                        <p className="tasty-tread-decs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti pariatur nam aperiam quas eaque atque obcaecati nisi veritatis sapiente. Qui maxime rem autem eveniet enim. Sequi consequatur distinctio eaque itaque.</p>
                        <ListGroup className="mt-5">
                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose_us-item d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i> Fresh and tasty foods</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, alias.</p>
                            </ListGroupItem>
                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose_us-item d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i> Quality support</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, alias.</p>
                            </ListGroupItem>
                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose_us-item d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i> Order from anywhere, anytime</p>
                                <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, alias.</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map(item => (
                <Col lg="3" md="4" key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_title mb-4">What our <span>customers</span> are <br /> saying ?</h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dicta, explicabo corporis cumque, deserunt illum tenetur hic repellendus fugiat alias totam voluptatem laudantium! Dolor quas velit nobis illo vitae nisi beatae. Maxime, eius sunt et iste accusantium similique eum, qui ad voluptate labore blanditiis! Architecto?
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6"  md="6">
              <img src={networkImg} alt="network-img" className="w-100"/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
