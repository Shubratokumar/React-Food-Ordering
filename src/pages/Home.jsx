import React from 'react';
import Helmet from './../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero.png";

const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" >
                            <div className="hero_content">
                                <h5 className="mb-3">Meet easy way to make order foods</h5>
                                <h1 className="mb-4 ">
                                    <span>Hungry?</span> Just make an order.<span>Food will at your door</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum laboriosam quod repellat inventore laudantium vel tempora corporis nulla.</p>
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

        </Helmet>
    );
};

export default Home;