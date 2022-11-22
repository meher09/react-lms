import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <section className="bg-white container flex justify-center my-12">
            <div>
                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">


                        <form className="mt-8 grid grid-cols-6 gap-6">




                            <div className="col-span-6">
                                <label for="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label for="Email" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>




                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    লগিন
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    একাউন্ট না থাকলে
                                    <Link to="/register" className="text-gray-700 underline mx-1">রেজিস্ট্রেশন করুন</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default Login;