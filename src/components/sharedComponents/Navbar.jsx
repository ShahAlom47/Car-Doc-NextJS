'use client'
import React from 'react';
import logo  from '../../../assets/logo/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const session=useSession()
  console.log(session);
  const nav = [

    {
      name: 'Home',
      path: '/',
      type:'public'
    },
    {
      name: 'About',
      path: '/',
      type:'public'
    },
    {
      name: 'Services',
      path: '/services',
      type:'public'
    },
    {
      name: 'Blog',
      path: '/',
      type:'public'
    },
  ]


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {
            nav.map((n,i)=> <li key={i}><a href={n.path}>{n.name}</a></li>)
          }

          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><Image src={logo} height={30} width={50} alt='logo' ></Image></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            nav.map((n,i)=> <li key={i}><a href={n.path}> {n.name}</a></li>)
          }
          

        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link href={'/'}><button className='p-3  rounded-full bg-none hover:text-neutral-50 hover:bg-p-color '><BsHandbag /></button></Link>
        <Link href={'/'}><button className='p-3  rounded-full bg-none hover:text-neutral-50 hover:bg-p-color '><IoIosSearch /></button></Link>
        <Link href={'/'}><button className='btn btn-sm  rounded-sm hover:bg-p-color hover:text-neutral-50 border border-p-color'>Appointment</button></Link>
        <Link href={'/login'}><button className='btn btn-sm  rounded-sm bg-p-color text-neutral-50 hover:text-neutral-800 border border-p-color'>login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;