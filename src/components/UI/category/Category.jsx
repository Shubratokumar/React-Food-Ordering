import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const CategoryData = [
    {
        display: "Fast Foods",
        imgUrl: categoryImg01
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02
    },
    {
        display: "Asian Foods",
        imgUrl: categoryImg03
    },
    {
        display: "Raw Meat",
        imgUrl: categoryImg04
    },
]

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    CategoryData.map((item, index) =>(
                        <Col lg="3" md="4">
                            <div className="category_item d-flex align-items-center gap-3">
                                <div className="category_img">
                                    <img src={item.imgUrl} alt="category_item" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>                        
                    ))
                }
            </Row>            
        </Container>
    );
};

export default Category;