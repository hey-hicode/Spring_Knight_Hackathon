// import React from 'react'
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// const SignUpModal = ({ isOpen, onClose, onSwitchModal }: any) => {
//     return (
//         <>
//           <Transition appear show={isOpen} as={Fragment}>
//             <Dialog as="div" className="relative z-10" onClose={onClose}>
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="fixed inset-0  bg-black bg-opacity-50 backdrop-blur" />
//               </Transition.Child>
    
//               <div className="fixed inset-0 overflow-y-auto">
//                 <div className="flex min-h-full items-center justify-center p-4 text-center">
//                   <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                   >
//                     <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg font-medium leading-6 text-gray-900"
//                       >
//                         Sign Up As
//                       </Dialog.Title>
//                       <div className="mt-2">
//                         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
//                           <div className="h-32 rounded-lg bg-gray-200 relative">
//                             <div className="absolute bottom-0">
//                               <button
//                                 type="button"
//                                 className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                               >
//                                 As An Investor
//                               </button>
//                             </div>
//                           </div>
//                           <div className="h-32 rounded-lg bg-gray-200 relative">
//                             <div className="absolute bottom-0">
//                               <button
//                                 type="button"
//                                 className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                               >
//                                 As Startup
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
    
//                       <div className="mt-4 flex justify-between items-center">
//                         <p>Dont have any account ?</p>
//                         <p
//                           className="text-sm text-blue-900 font-bold"
//                           onClick={onSwitchModal}
//                         >
//                           Sign Up
//                         </p>
//                       </div>
//                     </Dialog.Panel>
//                   </Transition.Child>
//                 </div>
//               </div>
//             </Dialog>
//           </Transition>
//         </>
//       );
// }

// export default SignUpModal

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function SignupModal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Sign Up
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Sign up to access our service.
                  </p>
                </div>
                {/* Form for signing up */}
                <form className="space-y-4 mt-4">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-full rounded-md border-gray-300 shadow-sm"
                  />
                  <input
                    type="password"
                    placeholder="Choose a password"
                    className="w-full rounded-md border-gray-300 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-500 text-white py-2 mt-4 hover:bg-blue-600"
                  >
                    Create Account
                  </button>
                </form>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default SignupModal;
