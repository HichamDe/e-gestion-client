import { useEffect, useState } from "react";



export default function Viewer(props) {

    const { products } = props;
    const [total, setTotal] = useState("");



    useEffect(() => {
        console.log(products);
    }, [])

    return (
        <>
            <section class="flex items-center bg-[#eeeeee] lg:h-screen font-poppins ">
                <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                    <div class="p-8 bg-gray-50">
                        <h2 class="mb-8 text-4xl font-bold ">Your Cart</h2>
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                                <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                    <div class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                        <h2 class="font-bold text-gray-500 ">Product name</h2>
                                    </div>
                                    <div class="hidden px-4 lg:block lg:w-2/12">
                                        <h2 class="font-bold text-gray-500 ">Price</h2>
                                    </div>
                                    <div class="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                                        <h2 class="font-bold text-gray-500 ">Quantity</h2>
                                    </div>
                                    <div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                                        <h2 class="font-bold text-gray-500 "> Subtotal</h2>
                                    </div>
                                </div>


                                <div class="py-4 mb-8 border-t border-b border-gray-200">

                                    {
                                        products.map(product =>
                                            <div key={product.id} class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                                                <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                                                    <div class="flex flex-wrap items-center -mx-4">
                                                        <div class="w-full px-4 mb-3 md:w-1/3">
                                                            <div class="w-full h-100 md:h-24 md:w-24">
                                                                <img src={product.photo} alt="" class="object-cover w-full h-full" />
                                                            </div>
                                                        </div>
                                                        <div class="w-2/3 px-4">
                                                            <h2 class="mb-2 text-xl font-bold ">{product.name}</h2>
                                                            <p class="text-gray-500 dark:text-gray-400 ">Picture frame</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hidden px-4 lg:block lg:w-2/12">
                                                    <p class="text-lg font-bold text-blue-500 ">${product.price}</p>
                                                    <span class="text-xs text-gray-500 line-through ">$1500</span>
                                                </div>
                                                <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                                                    <div class="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md ">
                                                        <button class="py-2 hover:text-gray-700 dark:text-gray-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                            </svg>
                                                        </button>
                                                        <input onChange={e=>product.qnt=e.target.value} type="number" class="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50 md:text-right" value={product.qnt} />
                                                        <button class="py-2 hover:text-gray-700 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                                                    <p class="text-lg font-bold text-blue-500 ">${ product.price * product.qnt }</p>
                                                </div>
                                            </div>)
                                    }

                                </div>


                                <div class="flex flex-wrap items-center gap-4">
                                    <span class="text-gray-700 ">Apply Coupon</span>
                                    <input type="text" class="flex-1 px-8 py-4 font-normal placeholder-gray-300 border md:flex-none md:mr-6" placeholder="x304k45" required="" />
                                    <button class="flex-1 inline-block px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md hover:bg-blue-600 md:flex-none">Apply</button>
                                </div>
                            </div>


                            <div class="w-full px-4 xl:w-4/12">
                                <div class="p-6 border border-blue-100  bg-blue-50 md:p-8">
                                    <h2 class="mb-8 text-3xl font-bold text-gray-700 ">Order Summary</h2>
                                    
                                    <div class="flex items-center justify-between pb-4 mb-4 ">
                                        <span class="text-gray-700 ">Shipping</span>
                                        <span class="text-xl font-bold text-gray-700 ">Free</span>
                                    </div>
                                    <div class="flex items-center justify-between pb-4 mb-4 ">
                                        <span class="text-gray-700 ">Order Total</span>
                                        <span class="text-xl font-bold text-gray-700 ">
                                            ${products.reduce((total, curVal) => { return total + curVal.price; }, 0)}
                                        </span>
                                    </div>
                                    <h2 class="text-lg text-gray-500 ">We offer:</h2>
                                    <div class="flex items-center mb-4 ">
                                        <a href="#">
                                            <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26" />
                                        </a>
                                        <a href="#">
                                            <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt="" class="object-cover h-16 mr-2 w-26" />
                                        </a>
                                        <a href="#">
                                            <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt="" class="object-cover h-16 mr-2 w-26" />
                                        </a>
                                    </div>
                                    <div class="flex items-center justify-between ">
                                        <a href="/commande" class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}