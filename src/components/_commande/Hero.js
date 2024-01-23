export default function Hero() {
    return (
        <section class="py-16 bg-gray-100 dark:bg-gray-800">
            <div class="max-w-6xl px-4 mx-auto">
                <div class="rounded-lg shadow bg-gray-50 dark:bg-gray-900 dark:border-gray-900">
                    <div class="p-6 ">
                        <div class="pb-6 border-b border-gray-100 dark:border-gray-800 ">
                            <h2 class="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
                                Payment Method
                            </h2>
                        </div>
                        <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-base font-semibold text-gray-700 dark:text-gray-400">
                                            Name
                                        </p>
                                    </div>
                                    <div class="w-full p-3 md:w-1/3">
                                        <input
                                            class="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="Adam" />
                                    </div>
                                    <div class="w-full p-3 md:w-1/3">
                                        <input
                                            class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="Smith" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 border-b border-gray-100 dark:border-gray-800">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap mb-2 -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 dark:text-gray-400">Card details</p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">Card Number
                                        </p>
                                        <div
                                            class="flex items-center overflow-hidden border border-gray-200 rounded-lg dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 focus-within:border-blue-500 ">
                                            <div class="flex-shrink-0 pl-3.5 pr-2">
                                                <img src="https://i.postimg.cc/YCDxyJ3c/download-removebg-preview-1.png"
                                                    alt="" class="object-contain w-7 h-7" />
                                            </div>
                                            <input
                                                class="w-full pr-4 py-2.5 text-base dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400 text-gray-900 font-normal outline-none"
                                                type="text" placeholder="1283960lk0887ad" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3"></div>
                                    <div class="w-full p-3 md:flex-1">
                                        <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">Expiry</p>
                                        <input
                                            class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="text" placeholder="7/29/2024" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 border-b border-gray-100 dark:border-gray-800 ">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 dark:text-gray-400">Email address</p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <input
                                            class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                            type="email" placeholder="adam@gmail.com" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-6 dark:border-gray-800">
                            <div class="w-full md:w-10/12">
                                <div class="flex flex-wrap -m-3">
                                    <div class="w-full p-3 md:w-1/3">
                                        <p class="text-sm font-semibold text-gray-800 dark:text-gray-400">
                                            Address</p>
                                    </div>
                                    <div class="w-full p-3 md:flex-1">
                                        <div class="flex flex-wrap -m-3">
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                                                    Country</p>
                                                <select
                                                    class="appearence-none dark:text-gray-400 dark:bg-gray-800  dark:border-gray-800  w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                                                    name="" id="">
                                                    <option>Canada</option>
                                                    <option>Nepal</option>
                                                    <option>India</option>
                                                    <option>China</option>
                                                </select>
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                                                    City</p>
                                                <input
                                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder="City" />
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                                                    State / Province
                                                </p>
                                                <input
                                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder=" State / Province" />
                                            </div>
                                            <div class="w-full p-3 md:w-1/2">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                                                    ZIP / Postal code
                                                </p>
                                                <input
                                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                                    type="text" placeholder=" ZIP / Postal code" />
                                            </div>
                                            <div class="w-full p-3">
                                                <p class="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                                                    Permanent address</p>
                                                <input
                                                    class="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
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
                                        class="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded-md dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 ">
                                        <p>Cancel</p>
                                    </button>
                                </div>
                                <div class="w-full md:w-auto p-1.5">
                                    <button
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