import { Input } from "./input"
import { Button } from "./button"

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
    <footer className=" lg:p-20 p-5 z-1000 bg-red-400  text-white w-screen h-auto ">
        <div className="  lg:gap-50 gap-10 flex lg:flex-row flex-col  justify-between w-full">
            <div className="w-full">
                <div className = "flex flex-col gap-5">
                    <h1 className =" font-bold lg:text-6xl text-2xl ">MIAMI BARBER HOUSE</h1>
                    <p className="lg:text-4xl text-lg">3309 W 80th St, Hialeah, FL 33018</p>
                    <p className = "lg:text-4xl text-lg">(786) 536-7919</p>

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
                            <Input className= "relative w-full border-white placeholder:text-white mt-10 "placeholder="e.g. John Doe"/>
                            <Button className = "bg-red-400 cursor-pointer text-white border border-white  hover:bg-white hover:text-red-400 hover:border-red-400 bottom-0 absolute right-0"type = "submit">Submit</Button>
                    </div>
                </div>
                <div className = "text-center justify-center items-center w-full">
                <p>©2026 Miami Barber House.</p>
                <p>Site developed by Traction Media.</p>
                </div>
             </div>
        </div>
    

        
    
    
    </footer>
    </>
    
)
}

export {Footer}