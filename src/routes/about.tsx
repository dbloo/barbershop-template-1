import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {motion} from "framer-motion"
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
            
             className = "text-black font-black lg:text-9xl text-6xl w-full">ABOUT US</motion.h1> 

        <div>
        <motion.p 
        initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.17 }}
        className = "text-black mt-10 lg:text-2xl  text-lg w-full">Miami Barber House started with a chair, a pair of clippers, and a simple belief — that everyone deserves a great cut. What began as a neighborhood spot in Hialeah has grown into something much bigger: a team of dedicated barbers, a loyal community of clients, and a shop that's become a staple of the city we love.
Every barber on our team brings their own style, their own story, and their own passion to the chair. From clean tapers to intricate braids, we take pride in the craft and it shows in every single cut.
</motion.p>

        <Button className = "  cursor-pointer border  bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-xl border-white/10 z-10 mt-10 mb-10 2xl:top-10  top-10"type="submit">Schedule an Appointment</Button>
        </div>

        </div>

                <div className=' rounded-xl lg:bg-center bg-fixed  relative flex lg:w-1/2 w-full h-full lg:bg-cover bg-contain bg-[url(/assets/barberheader.jpg)]'></div>

        </div>
        
  </section>
  
  
  </main>
}
