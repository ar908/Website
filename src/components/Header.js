import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Header() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-[12px] items-center 
    flex justify-between border-black mx-auto">
                <div className="text-5xl font-bold ">
                    WebSiteTech
                </div>
                <div onClick={handleToggle} className='block md:hidden'>
                    {
                        toggle ?

                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                            :

                            <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                    }
                </div>


                <ul className="hidden md:flex text-white gap-10">
                    <li className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">Home </li>
                    <li className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">Company  </li>
                    <li className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">Resources </li>
                    <li className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">About </li>
                    <li className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">Contect </li>
                </ul>
                {/* Responsive menu*/}
                <ul className={`duration-300 md:hidden w-full   fixed text-white bg-black top-[92px]
    $ {toggle ? 'left-[0] : left-[-100%]'}
    `}>
                    <li className="p-5">Home </li>
                    <li className="p-5">Company  </li>
                    <li className="p-5">Resources </li>
                    <li className="p-5">About </li>
                    <li className="p-5">Contect </li>
                </ul>

            </div>
        </div>
    )
}
export default Header;