import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className = ""> 
  
  <section className = "w-screen h-screen lg:p-20 pt-20 p-5">
    <div className='mt-10 w-full h-full flex lg:flex-row flex-col justify-between'>
      <div className='lg:w-1/2 w-full lg:h-full h-80 lg:overflow-hidden overflow-y-scroll relative lg:pr-20 flex flex-col'>
        <h1 className = "text-black font-black lg:text-9xl text-6xl w-full">ABOUT US</h1> 

        <div>
        <p className = "text-black mt-10 lg:text-2xl  text-lg w-full">Miami Barber House started with a chair, a pair of clippers, and a simple belief — that everyone deserves a great cut. What began as a neighborhood spot in Hialeah has grown into something much bigger: a team of dedicated barbers, a loyal community of clients, and a shop that's become a staple of the city we love.
Every barber on our team brings their own style, their own story, and their own passion to the chair. But we all share the same standard — precision, consistency, and a genuine care for every person who walks through our doors. From clean tapers to intricate braids, we take pride in the craft and it shows in every single cut.
At the end of the day, Miami Barber House is more than a barbershop. It's a place where you can kick back, be yourself, and leave looking your best. Whether you're a first-time visitor or a regular who's been with us since day one, you'll always get the same thing here — a great experience and an even better cut.</p>

        <Button className = " w-1/4 rise-in cursor-pointer border  bg-black text-white hover:bg-white hover:border-black hover:text-black rounded-xl border-white/10 z-10 relative 2xl:top-10  top-10"type="submit">Schedule an Appointment</Button>
        </div>

        </div>

                <div className=' rounded-xl bg-fixed  relaive flex lg:w-1/2 w-full h-full lg:bg-cover bg-center bg-[url(/assets/barberheader.jpg)]'></div>

        </div>
        
  </section>
  
  
  </main>
}
