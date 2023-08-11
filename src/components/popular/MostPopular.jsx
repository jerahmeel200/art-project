import React, { useState } from "react";
import "./style.css";

const MostPopular = ({ products }) => {
  return (
    <div className="product-card">
      <img src={products.image} alt="" />
      <p>{products.desc}</p>
      <h3>{products.price}</h3>
    </div>
  );
};

export default MostPopular;

// {popularItems.map((item, index) => (
//   <div>
//     <img
//       src={item.image}
//       alt="product"
//       style={{ height: 200, width: 500 }}
//     />
//     <p>{item.description}</p>
//     <StarRating rating={item.rating} className={styles.star} />
//     <span>{item.price}</span>
//   </div>
// ))}
