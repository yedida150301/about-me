import React from "react";
import { Link } from "react-scroll";
import './style.css';

const Navbar = () => {
    const menuItems = [
        { id: "home", name: "HOME" },
        { id: "about", name: "ABOUT" },
        { id: "portfolio", name: "PORTFOLIO" },
        { id: "resume", name: "RESUME" },
        { id: "contact", name: "CONTACT" },
    ];

    return (
        <div className="flex flex-col items-center px-2 py-4 sticky top-0 left-0 w-full bg-black">
            <div className="flex items-center justify-between w-full max-w-screen-xl">
                <p className="relative flex items-center [font-family:'Lexend_Deca',Arvo] font-bold text-transparent text-2xl tracking-[0] leading-[normal]">
                    <span className="text-white">About</span>
                    <span className="text-yellow-500">Me.</span>
                </p>
                <div className="flex gap-7 ml-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            className="relative w-fit mt-[-1.00px] [font-family:'Lexend_Deca',Arvo] font-normal text-gray-400 text-base tracking-[0] leading-[normal] cursor-pointer hover:text-yellow-500"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
