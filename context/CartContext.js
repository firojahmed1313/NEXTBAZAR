"use client"

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const CarContext = createContext();

export function CartProvider(props){
    const [cart ,setCart] =useState([]);


    const router= useRouter;

    return (

        <CarContext.Provider 
            value={{
                cart,
            }} 
        >
            {props.children}
        </CarContext.Provider>
    );
};