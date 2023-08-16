"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
// import { Col } from "reactstrap";
import styles from "./Products.module.css";

function page() {
  const allProducts = [
    {
      id: 1,
      image: "/images/popImage1.webp",
      desc: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 2,
      image: "/images/popImage2.avif",
      desc: "New York Subway",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 3,
      image: "/images/popImage3.webp",
      desc: "THE LAST SUPPER",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 4,
      image: "/images/popImage4.webp",
      desc: "AIR Kobe",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 5,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 6,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 7,
      image: "/images/popImage2.avif",
      desc: "New York Subway",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 8,
      image: "/images/popImage3.webp",
      desc: "THE LAST SUPPER",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 9,
      image: "/images/popImage4.webp",
      desc: "AIR Kobe",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 10,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 11,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 12,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
  ];

  const itemsPerPage = 16; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  7;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productList}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.products} ${
                index < 3 ? styles.firstRowProduct : ""
              }`}
            >
              <img
                src={item.image}
                alt=""
                style={{ height: 200, width: 500 }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default page;
