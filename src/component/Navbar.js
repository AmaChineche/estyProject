"use client"
import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import { PiListBold } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import Search from './Search';

const Navbar = () => {
  return (
    <div className=' bg-red-700'>

      <a href='#' > <Image alt="Logo" src="/Esty.png" width={100} height={350} /> </a>

       <h2 className='flex space-x-10 gap-2 font-sans font-semibold items-center hover:bg-gray-100 rounded-full px-5 py-3 transition-all text-sm active:'> <p className='cart'> <PiListBold /> category</p> </h2>

      <div><Search /></div> 

      <div className='iconbar'>
        <Link className="signin" href="/signIn">Sign In</Link>
        <Link className='bg-gray border-blue-300  hover:bg-sky-700' href="/signIn">Sign In</Link>
        <br />
        <Link className=' transition hover:text-pink-400 cursor-pointer' href="/favourite"><FaHeart /></Link>
        <br />

        <Link className=" hover:text-pink-700 transition hover:border-pink-400 cursor-pointer " href="/gift"><GoGift /></Link>
        <br>
        </br><Link className='hover:border-b-2 transition hover:' href="/cart"><BsCart3 /></Link>
      </div>

    </div>

  )
}

export default Navbar
