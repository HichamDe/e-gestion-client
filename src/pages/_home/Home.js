import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Product from "../../components/_home/Product";
import { useEffect, useState } from "react";
import fetch from "../../utils/fetch";

export default function Home() {
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:8000/api/products").then((data)=>{
            setProducts(data)
        })
    },[])

    return (

        <>
            <Nav />
            <div class="max-w-screen-xl m-auto grid grid-cols-3 place-items-center ">
                {products ? products.map(product => <Product id={product.id} name={product.designation} price={product.prix_u} photo={product.photo} />) : ""}
            </div>
            <Footer />

        </>

    );
}