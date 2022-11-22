import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="bg-white container flex justify-center my-12">
            <div>
                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">


                        <form className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="FirstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="LastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="last_name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

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

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>



                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="/" className="text-gray-700 underline mx-1">
                                        terms and conditions
                                    </a>
                                    and
                                    <a href="/" className="text-gray-700 underline mx-1">privacy policy</a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    ইতোমধ্যে একাউন্ট আছে ? তাহলে
                                    <Link to="/login" className="text-gray-700 underline mx-1">লগিন করুন</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Register;