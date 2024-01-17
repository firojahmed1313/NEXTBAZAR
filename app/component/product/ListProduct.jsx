"use client" ;
import React from 'react'
import ProductItem from './ProductItem'
import Filtter from '../header/Filtter'
const ListProduct = ({ datat }) => {
  console.log("listall", datat.products)
  const data=datat.products;
  return (
    <>
      <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filtter />
          {//<ProductItem key={data[0]._id} product={data[0]}/>
          }
          
          <main className="md:w-2/3 lg:w-3/4 px-3" >
              {data.map((product)=>{
                return(<ProductItem key={product._id} ele={product}/>)
              })}
          </main>
        </div>
      </div>
    </section>
    </>
  )
}

export default ListProduct