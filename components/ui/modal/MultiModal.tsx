import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MultiModal = ({ isOpen, onClose }: any) => {
  const [mode, setMode] = useState("login"); // Can be 'login' or 'signup'
  const router = useRouter();

  const navigateToSignupInvestor = () => {
    onClose(); // Close modal
    router.push("/Auth/Signup/Investors"); // Navigate to investor signup page
  };

  const navigateToSignupStartup = () => {
    onClose(); // Close modal
    router.push("/Auth/Signup/Startup"); // Navigate to startup signup page
  };
  const navigateToLoginInvestor = () => {
    onClose(); // Close modal
    router.push("/Auth/Login/Investors"); // Navigate to investor Login page
  };

  const navigateToLoginStartup = () => {
    onClose(); // Close modal
    router.push("/Auth/Login/Startup"); // Navigate to startup signup page
  };

  const switchToSignup = () => setMode("signup");
  const switchToLogin = () => setMode("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50  backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <h2 className="text-lg pb-3 font-medium leading-6 text-gray-900 capitalize">
          {mode} {"As "}
        </h2>
        {mode === "login" ? (
          <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 w-full">
              <div className="h-32 rounded-lg relative bg-gray-200">
                <div
                  onClick={navigateToLoginInvestor}
                  className="inline-flex absolute bottom-0 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  An Investor
                </div>
              </div>
              <div className="h-32 rounded-lg relative bg-gray-200">
                <div
                  onClick={navigateToLoginStartup}
                  className="inline-flex absolute bottom-0 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  A Startup
                </div>
              </div>
            </div>
            <div
              className="pt-3 flex justify-between items-center "
              onClick={switchToSignup}
            >
              <span className="text-sm text-gray-500">
                Don't have an account?{" "}
              </span>
              <span className="cursor-pointer text-sm  text-blue-500 ">
                Sign up
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 w-full">
              <div className="h-32 rounded-lg relative bg-gray-200">
                <div
                  onClick={navigateToSignupInvestor}
                  className="inline-flex absolute bottom-0 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  An Investor
                </div>
              </div>
              <div className="h-32 rounded-lg relative bg-gray-200">
                <div
                  onClick={navigateToSignupStartup}
                  className="inline-flex absolute bottom-0 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  A Startup
                </div>
              </div>
            </div>
            <div
              className="pt-3 flex justify-between items-center "
              onClick={switchToLogin}
            >
              <span className="text-sm text-gray-500">
                Already have an account?{" "}
              </span>
              <span className="cursor-pointer text-sm  text-blue-500 ">
                Log in!
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MultiModal;
