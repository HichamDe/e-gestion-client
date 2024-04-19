import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Viewer from "../components/_cart/Viewer";
import { useEffect, useState } from "react";

export default function Cart() {

    const [cartData, setCartData] = useState("");

    useEffect(() => {

        setCartData(JSON.parse(localStorage.getItem("products")));

    }, [])

    return (
        <>
            <Nav />
            { cartData ? <Viewer products={cartData} /> : "" }
            <Footer />
        </>
    );
}