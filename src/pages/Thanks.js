import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Thanks() {
    return (
        <>
            <Nav />
            <section class="flex items-center py-16 bg-gray-100 lg:h-screen font-poppins  ">
                <div
                    class="justify-center flex-1 max-w-6xl px-6 py-6 mx-auto bg-white border rounded-md shadow lg:py-10 md:px-7">
                    <div class="mb-8 text-center">
                        <h1
                            class="mb-4 text-3xl font-semibold leading-7 tracking-wide text-blue-800 lg:leading-9">
                            Thank you for your Purchase!</h1>
                        <p class="text-gray-500 dark:text-gray-400">your order number is: 012736373737</p>
                    </div>
                   
                    <a href="#" class="inline-flex items-center text-sm font-medium ">
                        
                        we will call you with in the next 2 days of work.
                    </a>
                    <div class="flex flex-wrap items-center justify-between gap-4 mt-6 ">
                        <a href="/"
                            class="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-blue-600">
                            Go back shopping
                        </a>
                        <button
                            class="w-full px-4 py-2 bg-blue-500 rounded-md text-gray-50 md:w-auto hover:bg-blue-600">
                            Track Order
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}