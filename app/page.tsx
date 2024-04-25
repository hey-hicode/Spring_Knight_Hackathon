import Image from "next/image";
import Navbar from "../components/Navbar";
import SectionB from "../components/Homepage/SectionB";
import SectionC from "@/components/Homepage/SectionC";
import SectionD from "@/components/Homepage/SectionD";
import SectionE from "@/components/Homepage/SectionE";

export default function Home() {
  return (
    <main className=" ">
      <div className=" grid md:grid-cols-2 grid-cols-1 py-20 md:py-0 content-between">
        <div className="flex mx-auto justify-center flex-col lg:text-start  md:text-center gap-y-2 max-w-[650px]">
          <div className="font-gooper md:max-w-[600px]  font-bold text-[26px] flex-col md:text-6xl flex lg:justify-center py-2 x lg:items-start">
            <div className="md:gap-2 md:max-w-full">
              <h1 className="  "> Why</h1>
              <h1 className="  md:pt-3">Y Combinator?</h1>
            </div>
          </div>
          <p className="md:text-lg text-[13px]  text-center justify-center lg:text-start font-medium max-w-[360px] md:max-w-[599px]">
            We give startups a disproportionate advantage.!
          </p>
          <button className="px-6 rounded-lg py-3 w-fit bg-indigo-500 hover:bg-indigo-600 text-gray-50  flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>

        <div className=" hidden md:block">
          <img
            src="https://www.ycombinator.com/vite/assets/why-yc-new-full-res-B8TvYziy.webp"
            alt="wlm"
          />
        </div>
      </div>

      {/* second banner */}
      <div className="">
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
      </div>
    </main>
  );
}
