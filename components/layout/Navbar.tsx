'use client'
import Link from 'next/link'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { div } from 'framer-motion/m';

const navItems = [
  
     {
        id: 1,
        name: 'One Piece',
        href: '/one-piece',
    },
    {
        id: 2,
        name: 'Pokemon',
        href: '/pokemon',
    },
    {
        id: 3,
        name: 'Events',
        href: '/events',
    },
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="w-full  ">
            <div className="md:flex hidden h-20 px-6 items-center justify-around  ">
                <div className="flex ">
                    <Link href="/" className=" text-2xl font-bold text-gray-800 ">TCG Storefront</Link>
                </div>
                <div className="flex gap-8 items-center">
                    {navItems.map((item) => (
                    <Link key={item.id} href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium j"
                    >
                        {item.name}
                    </Link>
                ))}
                </div>
                <div className="w-32 flex justify-end items-center">
                    <ShoppingCart className="text-gray-700 hover:text-gray-900 size-7 " />
                </div>
                
            </div>
 
                    {/* mobile nav */}
            
            <div className="md:hidden flex h-16 px-6 items-center ">
                
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="text-primary"/> : <Menu className="text-primary"/>}
                    
                </button>
                <Link href="/" className=" text-lg flex w-full items-center justify-center font-extralight text-gray-700 ">TCG Storefront</Link>
                <div className="flex-1 flex justify-end items-center">
                    <ShoppingCart className="text-gray-700 hover:text-gray-900 size-7 " />
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40 w-3/4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        >

                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 left-0 w-full h-full z-50 flex flex-col bg-white "
                        >
                            <div className="inline-flex px-6 py-5">
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="text-primary"/>
                                </button>

                                <Link href="/" className=" text-lg font-extralight text-gray-700 ">TCG Storefront</Link>
                            </div>
                           

                            <div className="flex flex-col px-6 py-4">
                                {navItems.map((item) => (
                                    <Link key={item.id} href={item.href} className="flex text-gray-700 text-xl py-4  " >
                                       {item.name}
                                    </Link>
                                ))}
                            </div>

                            
                        </motion.div>
                    )}
                   
                </AnimatePresence>
            </div>
        </nav>  
    )
}