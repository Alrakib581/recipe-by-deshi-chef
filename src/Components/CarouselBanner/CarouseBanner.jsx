import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouseBanner.css";

const CarouselBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item  interval={4000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/05/24/16/54/jools-2340974_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="h-50">
            <h2 className="text-warning fw-bold fs-1">
              100 Plus Bangladeshy Recipes.
            </h2>
            <p className="fs-3"></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption className="h-50">
            <h2 className="text-warning fw-bold fs-1">
              12 Plus National Chef From Bangladesh
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2020/03/27/21/28/food-4975040_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="h-50">
            <h2 className="text-warning fw-bold fs-1">
              100% Natural and Healthy Recipes
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
