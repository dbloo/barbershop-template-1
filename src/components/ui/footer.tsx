import { Input } from "./input"
import { Button } from "./button"
import { title } from "@/siteinfo"
import {contactInfo} from "@/siteinfo"

import {colors} from "@/siteinfo"

const hours ={
    mon:"9AM-8PM",
    tue:"9AM-8PM",
    wed:"9AM-8PM",
    thurs:"9AM-9PM",
    fri:"9AM-9PM",
    sat:"9AM-6:30PM",
    sun:"9AM-6PM",
}
    



function Footer () {

    return(
    
    <>
    <footer className={` lg:p-20 p-5 z-1000 ${colors.secondarybg} ${colors.primarytext} w-screen h-auto `}>
        <div className="  lg:gap-50 gap-10 flex lg:flex-row flex-col  justify-between w-full">
            <div className="w-full">
                <div className = "flex flex-col gap-5">
                    <h1 className =" font-bold lg:text-6xl text-2xl ">{title}</h1>
                    <p className="lg:text-4xl text-lg">{contactInfo.address}</p>
                    <p className = "lg:text-4xl text-lg">{contactInfo.phone}</p>

                    <h1 className =" font-bold mt-10 lg:text-6xl text-2xl">Hours</h1>

                    <p>Mon: {hours.mon}</p>
                    <p>Tue: {hours.tue}</p>
                    <p>Wed: {hours.wed}</p>
                    <p>Thurs: {hours.thurs}</p>
                    <p>Fri: {hours.fri}</p>
                    <p>Sat: {hours.sat}</p>
                    <p>Sun: {hours.sun}</p>

                </div>

            </div>

            <div className = " flex flex-col justify-between w-full h-auto">
                <div className="text-center justify-center items-center w-full">
                    <h1 className = "font-bold lg:text-6xl text-2xl">Stay in the loop</h1>
                    <p className="mt-5 ">Enter your email to be notified of our specials and discounts </p>
                    <div className = "relative w-full mb-10">
                            <Input className= {`relative w-full ${colors.primaryborder} placeholder:${colors.primarytext} mt-10 "placeholder="e.g. John Doe`}/>
                            <Button className = {` ${colors.secondarybg} cursor-pointer ${colors.primarytext} border ${colors.primaryborder}  hover:bg-white hover:${colors.primarytext} hover:${colors.primaryborder} bottom-0 absolute right-0`}type = "submit">Submit</Button>
                    </div>
                </div>
                <div className = "text-center justify-center items-center w-full">
                <p>©2026 {title}.</p>
                <p>Site developed by Traction Media.</p>
                </div>
             </div>
        </div>
    

        
    
    
    </footer>
    </>
    
)
}

export {Footer}