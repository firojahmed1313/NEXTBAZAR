import React from 'react'
import Productdatials from '../../component/product/Productdatials'
import axios from 'axios';
import Navber from '../../component/header/Navber'
const getProductDetails = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  //console.log("data",data)
  return data?.productd;
};

const page = async ({params}) => {
  const product= await getProductDetails(params.id)
  //console.log("page",product)
  return (
    <>

    <Navber/>
    <Productdatials product={product}/>
    </>
  )
}

export default page