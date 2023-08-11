import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./MostPopular.module.css";
import StarRating from "@/reusables/StarRating";

function MostPopular() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [
    {
      id: 1,
      image: "/images/popImage1.webp",
      desc: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage2.avif",
      desc: "New York Subway",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage3.webp",
      desc: "THE LAST SUPPER",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage4.webp",
      desc: "AIR Kobe",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
  ];

  return (
    <div className={styles.carousel}>
      <h1>products</h1>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className={styles.box}>
            <img
              src={item.image}
              alt="product"
              style={{ height: 200, width: 500 }}
            />
            <h4>{item.desc}</h4>
            <p>{item.description}</p>
            <span style={{ left: 0, backgroundColor: "red" }}>
              <StarRating rating={item.rating} className="my-10" />
            </span>
            <span className={styles.c}>{item.price}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MostPopular;
