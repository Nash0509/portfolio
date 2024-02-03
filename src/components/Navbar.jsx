'use client'
import React from 'react'
import Link from 'next/link';
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from './Skills';
import { motion, useScroll } from "framer-motion";


const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
   <div>
     <div className='grid grid-cols-2 gap-2 p-5'>
      <div><Link href='/' className='font-bold lg:text-3xl sm:text-xl'>NISHANT's portfolio</Link></div>
      <div>
        <ul className='grid grid-cols-4 gap-1'>
          <Link href='#home' ><li>Home</li></Link>
          <Link href='#projects'><li>Projects</li></Link>
          <Link href='#skills'>Skills</Link>
          <Link href='#contact'><li>Contact</li></Link>
        </ul>
      </div>
    </div>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
   <div>
   <Home/>
   <Skills/>
   <About/>
   <Contact/>
   </div>
   <Footer/>
   </div>
  )
}

export default Navbar