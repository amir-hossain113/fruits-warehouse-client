import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerOne from '../../../images/banner/banner1.png';
import bannerTwo from '../../../images/banner/banner2.png';
import bannerThree from '../../../images/banner/banner3.png';
 
const Banner = () => {
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide of Fruits Warehouse</h3>
                <p>You will find all different types of fruits here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerTwo}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide of Fruits Warehouse</h3>
                <p>You will find all different types of fruits here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerThree}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide of Fruits Warehouse</h3>
                <p>You will find all different types of fruits here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;