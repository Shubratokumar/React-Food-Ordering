import React from 'react';
import Helmet from './../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from 'react-router-dom';
import Category from './../components/UI/category/Category';

const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" >
                            <div className="hero_content">
                                <h5 className="mb-3">Meet easy way to make order foods</h5>
                                <h1 className="mb-4 hero_title">
                                    <span>Hungry?</span> Just make an order. Food will at <span> your door</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum laboriosam quod repellat inventore laudantium vel tempora corporis nulla.</p>
                                <div className="hero_btns d-flex align-items-center gap-4 mt-4">
                                    <button className="order_btn d-flex align-items-center justify-content-between"> Order Now {" "} <i class="ri-arrow-right-s-line"></i></button>
                                    <button className="all_foods-btn">
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>
                                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                                    <p className='d-flex align-items-center gap-2'>
                                        <span className="shipping_icon">
                                            <i class="ri-caravan-line"></i> 
                                        </span> 
                                        No Shipping Charges
                                    </p>
                                    <p className='d-flex align-items-center gap-2'>
                                        <span className="shipping_icon">
                                            <i class="ri-shield-check-line"></i>
                                        </span> 
                                        100% Secured Checkout
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" >
                            <div className="hero_img">
                                <img src={heroImg} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Category></Category>
            </section>

        </Helmet>
    );
};

export default Home;