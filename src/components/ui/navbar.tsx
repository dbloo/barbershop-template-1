
import {Button } from "@/components/ui/button"
import {Link} from "@tanstack/react-router"

import {motion} from "framer-motion"

import { useState } from "react"


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

 

    return(<>
    
    
    <motion.div 
    initial={{ y: -300, opacity: 1 }}
    animate={isOpen ? { y:-100, opacity: 1, transition: {type:"spring", stiffness:1000, damping: 100, duration:0.5, ease: "easeInOut"} } :  { y: -300, opacity: 1 }}

    
    className="h-95 fixed z-1000  overflow-y-hidden bg-black justify-center items-center text-text-head  w-screen ">
        <nav className="w-full  absolute lg:-bottom-3 bottom-0 flex flex-row justify-between items-center lg:p-10 p-5">
        <Link className = " text-white" onClick = {() => setIsOpen(false)} to = "/"><h1 className = "cursor-pointer lg:text-xl text-sm font-black">MIAMI BARBER HOUSE</h1></Link>
        <div className = "text-sm flex flex-row gap-4 justify-center relative items-center">
                <ul className = {`items-center lg:flex lg:flex-row lg:w-full w-screen flex-col ${isOpen ? "flex opacity-100 bottom-10 text-3xl -right-5  absolute" : "hidden"} transition-all ease-in-out gap-5`}>
                <Link onClick = {() => setIsOpen(false)} to = "/about"><li>About</li></Link>
                <Link onClick = {() => setIsOpen(false)}to = "/gallery"><li>Gallery</li></Link>
                <a onClick = {() => setIsOpen(false)} href = "https://getsquire.com/booking/book/miami-barber-house-hialeah" className = " "><li className = "bg-white text-black w-screen justify-center items-center text-center lg:hidden">Book A Barber</li></a>
               <li className = ""><a href= "https://getsquire.com/booking/book/miami-barber-house-hialeah"><Button size ="sm"className=" hidden lg:flex cursor-pointer hover:text-white hover:bg-black border rounded-xl border-white bg-white text-black ">Book a Barber</Button></a></li></ul>

               <div onClick = {() => setIsOpen(!isOpen)} className = "lg:hidden flex gap-1 flex-col">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-white h-0.75 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-white h-0.75 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-white h-0.75 w-8 block"
                    />


               </div>
        </div>
        </nav>
        
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: .5, transition: { duration: 0.3 } } : { opacity: 0, transition: { duration: 0.3 } }}
        
        className={`${isOpen ? " " : "hidden"}w-screen  h-screen fixed bg-black z-100 brightness-50`}></motion.div>
        

        </>)
}

export {Navbar}