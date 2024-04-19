import { useState } from "react";
import axios from "axios";

export default function Hero() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function order() {
        axios.post("http://localhost:8000/commande/create",
            {
                firstName,
                lastName,
                phoneNumber,
                products: JSON.parse(localStorage.getItem("products"))
            },
            {
                'Content-Type': 'text/plain'
            }
        ).then((res) => {
            console.log(res);
            localStorage.removeItem("products");
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <section class="py-16 bg-gray-100 ">
            <div class="max-w-6xl px-4 mx-auto">
                <div class="rounded-lg shadow bg-gray-50 ">
                    <div class="p-6 ">
                        <div class="pb-6 border-b border-gray-100 ">
                            <h2 class="text-xl font-bold text-gray-800 md:text-3xl ">
                                Payment Method
                            </h2>
                        </div>
                        <div class="py-6 border-b border-gray-100 ">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-base font-semibold text-gray-700 ">
                                            Name <span className="text-red-500">*</span>
                                        </p>
                                    </div>
                                    <div class="w-full p-3 md:w-1/3">
                                        <input
                                            onChange={e => setFirstName(e.target.value)}
                                            class="w-full  px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="Adam" />
                                    </div>
                                    <div class="w-full p-3 md:w-1/3">
                                        <input
                                            onChange={e => setLastName(e.target.value)}
                                            class="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="Smith" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 border-b border-gray-100 ">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap mb-2 -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 ">Card details</p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <p class="mb-1.5 font-medium text-base text-gray-800 ">Card Number
                                        </p>
                                        <div
                                            class="flex items-center overflow-hidden border border-gray-200 rounded-lg focus-within:border-blue-500 ">
                                            <div class="flex-shrink-0 pl-3.5 pr-2">
                                                <img src="https://i.postimg.cc/YCDxyJ3c/download-removebg-preview-1.png"
                                                    alt="" class="object-contain w-7 h-7" />
                                            </div>
                                            <input
                                                class="w-full pr-4 py-2.5 text-base text-gray-900 font-normal outline-none"
                                                type="text" placeholder="1283960lk0887ad" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3"></div>
                                    <div class="w-full p-3 md:flex-1">
                                        <p class="mb-1.5 font-medium text-base text-gray-800 ">Expiry</p>
                                        <input
                                            class="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="7/29/2024" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 border-b border-gray-100 ">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 ">Phone Number <span className="text-red-500">*</span></p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <input
                                            onChange={e => setPhoneNumber(e.target.value)}
                                            class="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="email" placeholder="+212 XX" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 ">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 ">
                                            Address</p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <div class="flex flex-wrap -m-3">
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 ">
                                                    Country</p>
                                                <select
                                                    class="appearence-none w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                                                    name="" id="">
                                                    <option>Canada</option>
                                                    <option>Nepal</option>
                                                    <option>India</option>
                                                    <option>China</option>
                                                </select>
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 ">
                                                    City</p>
                                                <input
                                                    class="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder="City" />
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 ">
                                                    State / Province
                                                </p>
                                                <input
                                                    class="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder=" State / Province" />
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 ">
                                                    ZIP / Postal code
                                                </p>
                                                <input
                                                    class="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder=" ZIP / Postal code" />
                                            </div>
                                            <div class="w-full p-3">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 ">
                                                    Permanent address</p>
                                                <input
                                                    class="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder="  Permanent address" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-10/12">
                            <div class="flex flex-wrap justify-end -m-1.5">
                                <div class="w-full md:w-auto p-1.5">
                                    <button
                                        class="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-100 ">
                                        <p>Cancel</p>
                                    </button>
                                </div>
                                <div class="w-full md:w-auto p-1.5">
                                    <button onClick={order}
                                        class="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                                        <p>Save</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}