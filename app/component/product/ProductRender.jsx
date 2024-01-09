import React from "react";
import Head from "../header/Head";
import axios from "axios";
import ListProduct from "./ListProduct";
/*
let getproduct=async()=>{

    //const {data} = await axios.get(`${process.env.API_URL}/api/products/`);
    try {
      const {data} = await axios.get(`${process.env.API_URL}/api/products/`);
      // Process the successful response
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle authentication error
        console.error('Authentication failed:', error.message);
      } else {
        // Handle other errors
        console.error('Request failed:', error.message);
      }
    }
    
  
  }*/

  

const ProductRender = async ({products}) => {
  //const productData = await getproduct();
  console.log("productData = ",products);
  return (
    <>
      <Head />
      {products ? <ListProduct data={products} /> : <h1></h1>}
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(`${process.env.API_URL}/api/products/`);
    const products = response.data;
    console.log("response =" , response);
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
export default ProductRender;
