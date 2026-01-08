'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/skidstudiologo.png";

const NavBar = () => {

    return (
        <nav className="w-full h-[8%] shadow-md fixed top-0 left-0 z-50 backdrop-blur-xs bg-black/20">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-center items-center">
                <div className="flex items-center justify-between">
                    <Link href="https://www.instagram.com/skidstudio_?igsh=MXhwZWRuNzd3cDFxdQ%3D%3D&utm_source=qr" target="_blank"><Image src={logo} alt="Skid Graphics Logo" width={30} height={30} /></Link>
                </div>
            </div>


        </nav>
    );
}

export default NavBar
