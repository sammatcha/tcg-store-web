'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import CartIcon from '@/components/cart/CartIcon'

const navItems = [
  
     {
        id: 1,
        name: 'One Piece',
        href: '/collections/One-Piece',
    },
    {
        id: 2,
        name: 'Pokemon',
        href: '/collections/Pokemon',
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
        <nav className="w-full cursor-pointer ">
            <div className="md:flex hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-20 items-center justify-between ">
                <div className="flex ">
                    <Link href="/" className="text-2xl font-bold text-gray-800 ">TCG Storefront</Link>
                </div>
                <div className="flex gap-8 items-center">
                    {navItems.map((item) => (
                    <Link key={item.id} href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
                    >
                        {item.name}
                    </Link>
                ))}
                </div>
                <div className="w-32 flex justify-end items-center">
                    <CartIcon />
                </div>
            </div>
 
                    {/* mobile nav */}
            
            <div className="md:hidden w-full ">
                <div className='grid grid-cols-[auto_1fr_auto] max-w-7xl mx-auto items-center h-16 px-4 sm:px-6 lg:px-8'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen && <Menu className="text-primary bg-white"/>}
                    </button>
                    <Link href="/" className=" text-lg items-center justify-center whitespace-nowrap font-extralight text-gray-700 text-center ">TCG Storefront</Link>
                    <div className="flex justify-end items-center">
                        <CartIcon />
                    </div>
                </div>
            </div>
             <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40 "
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
                            className="fixed top-0 left-0 h-full w-full z-50 w-[280px] max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex flex-col bg-white"
                        >
                            <div className="grid grid-cols-3 items-center text-nowrap h-16 w-full">
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
        </nav>  
    )
}