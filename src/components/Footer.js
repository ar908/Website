// import React from 'react';
// import {
  
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from 'react-icons/fa';

// function Footer(){
//   return (
//     <Footer>
//     <div classNameName='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
//       <div>
//         <h1 classNameName='w-full text-3xl font-bold text-black'>WsCube Tech.</h1>
//         <p classNameName='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
//         <div classNameName='flex justify-between md:w-[75%] my-6'>
//           <FaFacebookSquare size={30} />
//           <FaInstagram size={30} />
//           <FaTwitterSquare size={30} />
//           <FaGithubSquare size={30} />
//         </div>
//       </div>
//       <div classNameName='lg:col-span-2 flex justify-between mt-6'>
//         <div>
//           <h6 classNameName='font-medium text-black'>Solutions</h6>
//           <ul>
//             <li classNameName='py-2 text-sm'>Analytics</li>
//             <li classNameName='py-2 text-sm'>Marketing</li>
//             <li classNameName='py-2 text-sm'>Commerce</li>
//             <li classNameName='py-2 text-sm'>Insights</li>
//           </ul>
//         </div>
//         <div>
//           <h6 classNameName='font-medium text-black'>Support</h6>
//           <ul>
//             <li classNameName='py-2 text-sm'>Pricing</li>
//             <li classNameName='py-2 text-sm'>Documentation</li>
//             <li classNameName='py-2 text-sm'>Guides</li>
//             <li classNameName='py-2 text-sm'>API Status</li>
//           </ul>
//         </div>
//         <div>
//           <h6 classNameName='font-medium text-black'>Company</h6>
//           <ul>
//             <li classNameName='py-2 text-sm'>About</li>
//             <li classNameName='py-2 text-sm'>Blog</li>
//             <li classNameName='py-2 text-sm'>Jobs</li>
//             <li classNameName='py-2 text-sm'>Press</li>
//             <li classNameName='py-2 text-sm'>Careers</li>
//           </ul>
//         </div>
//         <div>
//           <h6 classNameName='font-medium text-black'>Legal</h6>
//           <ul>
//             <li classNameName='py-2 text-sm'>Claim</li>
//             <li classNameName='py-2 text-sm'>Policy</li>
//             <li classNameName='py-2 text-sm'>Terms</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </Footer>
//   );
// };



import React from "react";
function Footer(){
  return(
    
<footer className="p-6 bg-[#2699fb]  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-1000">
<span className="sm:text-center dark:text-white-400">© 2023  All Rights Reserved.
</span>
<ul className="hidden md:flex text-white gap-10">
                    <li>Home </li>
                    <li>Company  </li>
                    <li>Resources </li>
                    <li>About </li>
                    <li>Contect </li>
                </ul>
</footer>

  )
}

 export default Footer;


 