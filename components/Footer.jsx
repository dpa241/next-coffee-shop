import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {FaYoutube,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "About" },
  { href: "/", name: "Explore" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat pt-16 relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/[0.80] z-10 top-0'></div>
        <div className='container mx-auto z-20'>
          
          {/* logo */}
          <div>
            <Link href="#" className='relative w-[120px] h-[50px] mx-auto'>
            <Image src="/assets/logo.svg" fill alt='' className='object-contain'/>
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer