'use client';
import Image from "next/image";
import logo from "../public/Logo.png";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const router = useRouter(); // Access the router object
  const navigateToLogin = () => {
    router.push('login');
  };

  return (
    <div className="bg-background">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto rounded-xl"
            src={logo}
            alt="Your Company"
          />
          <h2 className="rounded-lg mt-10 text-center text-2xl/9 font-bold tracking-tight text-white bg-hcmutDarkBlue">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="p-5 space-y-6 border-solid border-2 shadow-sm rounded-xl" action="#" method="POST">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* User Name */}
            <div>
              <label
                htmlFor="user-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                User name
              </label>
              <div className="mt-2">
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  autoComplete="username"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="class-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Class Name
              </label>
              <div className="mt-2">
                <input
                  id="class-name"
                  name="class-name"
                  type="text"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Bank Information */}
            <div>
              <label
                htmlFor="bank-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Bank Name
              </label>
              <div className="mt-2">
                <input
                  id="bank-name"
                  name="bank-name"
                  type="text"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bank-account"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Bank Account Number
              </label>
              <div className="mt-2">
                <input
                  id="bank-account"
                  name="bank-account"
                  type="text"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* Role Selector */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <select
                  id="role"
                  name="role"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                >
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0112 6c2.945 0 5.678.994 7.796 2.646M12 18c-2.945 0-5.678-.994-7.796-2.646M3.98 15.777A10.477 10.477 0 0112 18c2.945 0 5.678-.994-7.796-2.646M3.98 8.223A10.477 10.477 0 0112 6c2.945 0 5.678.994 7.796 2.646M15.454 12A3.454 3.454 0 1112 8.546 3.454 3.454 0 0115.454 12z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.93 4.93l14.14 14.14"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.454 12A3.454 3.454 0 1112 8.546 3.454 3.454 0 0115.454 12z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-hcmutDarkBlue px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-hcmutLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <a
              href="#"
              className="font-semibold text-hcmutDarkBlue hover:text-hcmutLightBlue"
              onClick={navigateToLogin}
            >
              Sign in to your account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
