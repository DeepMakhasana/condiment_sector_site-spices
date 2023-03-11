import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from "./ProductList";
import Title from '../Title';
import Partnership from '../Partnership';

//images
import product1 from "./images/product-1.jpg"
import product2 from "./images/product-2.jpg"
import product3 from "./images/product-3.jpg"
import product4 from "./images/product-4.jpg"
import product5 from "./images/product-5.jpg"
import product6 from "./images/product-6.jpg"
import product7 from "./images/product-7.jpg"

const Product = () => {
  const params = useParams();
  const productTitle = params.title.replace(/-/g, " ");
  const productDetail = ProductList.filter(data => data.title === productTitle);
  console.log(productDetail)
  const images = productDetail[0].images;

  let img;
  switch (images) {
    case "1":
      img = product1;
      break;
    case "2":
      img = product2;
      break;
    case "3":
      img = product3;
      break;
    case "4":
      img = product4;
      break;
    case "5":
      img = product5;
      break;
    case "6":
      img = product6;
      break;
    case "7":
      img = product7;
      break;
    default:
      break;
  }

  return (
    <>
      <Title title={productDetail[0].title} />
      <div className="container product">
        <div className='product-img'>
          <img src={img} alt="Sauces Glazes & Gravies" />
        </div>
        <div className="product-info">
          <p>{productDetail[0].desc1}</p>
          <p>{productDetail[0].desc2}</p>
          <p>{productDetail[0].desc3}</p>
          <p>{productDetail[0].desc4}</p>
        </div>
        <Partnership />
      </div>
    </>
  )
}

export default Product
