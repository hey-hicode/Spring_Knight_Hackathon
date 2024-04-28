"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import useFetch from "@/components/Hooks/useFetch";
import { Console } from "console";
const page = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignUp = async (e: any) => {
    // Prevent default form submission behavior
    e.preventDefault();

    setLoading(true);
    try {
      const payload = {
        email: email,
        username: username,
        fullName: fullName,
        password: password,
      };
      const response = await fetch(
        "https://hackathon.buildhubb.com/auth/investor/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 200) {
      } else if (response.status === 400) {
        console.log("User with this email has already been waitlisted");
      } else if (response.status === 422) {
        toogleErr();
        console.log("Attention! Empty fields need your attention");
      } else {
        console.log(
          "An Error in your Details. Please try again inputting your details correctly."
        );
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Sign Up As An Investor !
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form  onSubmit={handleSignUp} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-slate-200 border-none p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                UserName
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg bg-slate-200 border-none p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Your username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                FullName
              </label>

              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg bg-slate-200 border-none p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Your FullName"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="sr-only">
                UserName
              </label>

              <div className="relative">
                <select className="w-full rounded-lg bg-slate-200 border-none p-4 pe-12 text-sm shadow-sm">
                  <option unselectable="on">Sign up as ?</option>
                  <option value="">As an individual</option>
                  <option value="">As a Startup</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-none bg-slate-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Have an account?
                <Link href={"/Auth/Login/Investors"}>Sign in</Link>
              </p>

              <button
                type="submit"
                
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                {loading? "loading" :" Sign Up"}
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function toogleCongrat() {
  throw new Error("Function not implemented.");
}

function toogleErr() {
  throw new Error("Function not implemented.");
}

function SetErrMessage(arg0: string) {
  throw new Error("Function not implemented.");
}

function SetErrButton(arg0: string) {
  throw new Error("Function not implemented.");
}
