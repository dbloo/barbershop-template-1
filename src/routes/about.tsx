import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {motion} from "framer-motion"
import {about } from '@/siteinfo'
import {colors} from "@/siteinfo"
export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className = ""> 
  
  <section className = "w-screen h-auto lg:p-20 pt-20 p-5">
    <div className='mt-10 w-full h-screen flex lg:flex-row flex-col justify-between'>
      <div className='lg:w-1/2 w-full lg:h-full lg:overflow-hidden  relative lg:pr-20 flex flex-col'>
        <motion.h1 initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            
             className = {`${colors.primarytext} font-black lg:text-9xl text-6xl w-full `}>ABOUT US</motion.h1> 

        <div>
        <motion.p 
        initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.17 }}
        className ={`${colors.primarytext} mt-10 lg:text-2xl  text-lg w-full`}>{about}
</motion.p>

        <Button className = {` cursor-pointer border  ${colors.primarybg} text-white hover:bg-white hover:border-black hover:text-black rounded-xl ${colors.secondaryborder} z-10 mt-10 mb-10 2xl:top-10  top-10`}type="submit">Schedule an Appointment</Button>
        </div>

        </div>

                <div className=' rounded-xl lg:bg-center lg:bg-fixed  relative flex lg:w-1/2 w-full h-full lg:bg-cover bg-contain bg-[url(/assets/barberheader.jpg)]'></div>

        </div>
        
  </section>
  
  
  </main>
}
