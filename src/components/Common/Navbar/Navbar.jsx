"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (header) {
                header.classList.toggle("sticky", window.scrollY > 53);
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileMenu, showMobileMenu] = React.useState(false)
    return (
        <header className={`flex flex-col  z-10  w-full ${mobileMenu ? "h-56 pt-4 " : "h-14 items-center"}  px-3 gap-2 shadow-md   `}>
            <div className="flex px-3 gap-2 justify-between items-center w-full h-14 " >
                <div  >Logo Gelicek</div>
                <div className="flex h-full py-3 justify-center items-center gap-4 invisible  lg:visible ">
                    <Link className="w-20 h-full hover:bg-slate-200 flex justify-center items-center rounded-lg   " href="/#">About</Link>
                    <Link className="w-20 h-full hover:bg-slate-200 flex justify-center items-center rounded-lg   " href={"#"}>Project</Link>
                    <Link className="w-20 h-full hover:bg-slate-200 flex justify-center items-center rounded-lg   " href={"#"}>Contact</Link>
                </div>
                <div onClick={() => showMobileMenu(!mobileMenu)} className="lg:invisible rounded-s-3xl  " >
                    <CiMenuBurger />
                </div>
            </div>

            {mobileMenu && (

                <div className="flex flex-col gap-3 justify-center" >
                    hic bir fikrim yok
                    <Link className="w-20  cursor-pointer hover:bg-slate-200 flex justify-center items-center rounded-lg   " href="/#">About</Link>
                    <Link className="w-20  cursor-pointer hover:bg-slate-200 flex justify-center items-center rounded-lg   " href="#">Project</Link>
                    <Link className="w-20  cursor-pointer hover:bg-slate-200 flex justify-center items-center rounded-lg   " href="#">Contact</Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
