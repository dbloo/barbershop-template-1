import { createFileRoute } from '@tanstack/react-router'
import {Button} from '@/components/ui/button'
import {Link} from "@tanstack/react-router"
import { StaffCard, Services } from '#/components/ui/card'
import {AnimatePresence, motion} from "framer-motion"

import {title, intro, services, staff, images, herodescription, link } from '@/siteinfo'

export const Route = createFileRoute('/')({ component: Home })

  
function Home() {



  return (
   <main className='w-screen overflow-x-hidden min-h-screen'>

      <section className = "w-screen h-screen page-break flex flex-col ">
        <AnimatePresence>
        <div className = " w-full relative h-full text-center  flex justify-center items-center">
          <div  className='w-full  p-5 h-full flex flex-col absolute justify-center items-center '>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          
          
          className=' z-10 text-center font-black lg:text-8xl text-6xl text-text-head'>{title}</motion.h1>
          <motion.p 
           
           initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          
          className = "z-10 pt-5 text-xl text-white "> {herodescription}</motion.p>
                  
                  <motion.div
                  
                    
            
            >
                  
                  <motion.a href = {link}
             
                  >
                        <Button className = " rise-in cursor-pointer border  bg-white text-black hover:border-white  hover:bg-black hover:text-white rounded-xl border-white/10 z-10 relative 2xl:top-10  top-10"type="submit">Schedule an Appointment</Button>
                    </motion.a>
                    </motion.div>
                  </div>
        <div 
        style = {{backgroundImage: `url(${images.hero})`}}
        className={`lg:bg-fixed brightness-50 absolute w-screen h-screen lg:bg-cover bg-cover bg-center`}></div>
        <div className = "items-center justify-center w-full h-full ">
        </div>
        </div>
        </AnimatePresence>
      </section>
      <section className='w-screen h-screen lg:p-20 p-5'>
        <div className = " w-full h-full flex flex-col lg:flex-row">
        <div className ="h-full w-full lg:w-screen">
        <motion.h1 

           initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        
        className=' z-10 font-black lg:text-8xl text-4xl  '>We Prioritize Your Looks.</motion.h1>
        <motion.p

          initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            
        
        className=' z-10   lg:w-4/5 w-full lg:text-2xl text-lg mt-10 '>{intro}</motion.p>
        <Link to="/gallery"><Button size="lg" className = "cursor-pointer hover:bg-white hover:border-black hover:text-black z-10 relative mt-5  bg-black border border-white/20 shadow-md rounded-xl "type="submit">View our Gallery</Button></Link>
        </div>

            <div className = "">
                <motion.img 
               initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
                
                className ="border border-black/70 rounded-3xl lg:mt-90 w-400"src ="/assets/cut1.jpg"/>
                </div>

        </div>
      </section>
      <section className = "bg-white w-screen h-screen p-5 lg:pl-50 lg:pr-50  ">
        <div className='h-full w-full flex flex-col'>

          <div className ="w-full text-center justify-center items-center">

            <div className = " justify-center items-center border-t border-black  mask-radial-to-70%  w-full "></div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        
        className=' z-10 font-black lg:text-6xl text-4xl mt-10 '>Our Professionals</motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}className=' z-10   lg:text-2xl text-2xl mt-10 '>Barbers dedicated to your personal style</motion.p>
        
        </div>

          
                
                <div className = "mask-b-from-80% mt-10 lg:mask-b-from-100% pb-20 gap-4 justify-center items-center relative  w-full grid lg:grid-cols-5 grid-cols-2 border-black rounded-2xl lg:overflow-hidden overflow-y-scroll">

                     {staff.map((employee, i) => (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                      
                      
                      className = "">
                        <StaffCard key = {i} name = {employee.name} image = {employee.image} link = {employee.link}/>
                        </motion.div>
                     ))}

                     </div>


      
                        </div>

      </section>

      <section className = "bg-black w-screen h-screen lg:pr-20 lg:pl-20 lg:pb-20 p-5 ">
        <div className='h-full w-full flex flex-col'>

          <div className ="w-full text-center mb-15">
          <div className = " justify-center items-center border-t border-white mb-5  mask-radial-to-70%  w-full "></div>
        <motion.h1
        initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        className=' z-10 font-black text-white lg:text-6xl text-4xl  '>Our Services</motion.h1>
        <motion.p 
        initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        className=' z-10   lg:text-2xl text-2xl mt-5 mb-10 text-white '>What we can help you with</motion.p>
        
        </div>
                
                {/* <div className = "gap-4 justify-between items-center  relative h-full w-full flex flex-row border-black rounded-2xl overflow-clip">

                       {services.map((service, i) => (
                     
                        <ServicesCard key = {i} title = {service.title} icon = " " image = {service.image} description = {service.description}/>
                      
                     ))}

                     </div> */}


                     <div className = "gap-4 lg:mask-b-from-100% mask-b-from-90% flex flex-col  h-full relative  w-full lg:grid lg:grid-cols-2 border-black  lg:overflow-hidden overflow-y-scroll">

                       {services.map((service, i) => (
                          <motion.div 

                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05}}

                          className = "h-full"
            
                      >
                        <Services key = {i} title = {service.title} Icon = {service.Icon} image = {service.image} description = {service.description}/>
                        </motion.div>
                      
                     ))}

                     </div>


      
                        </div>

      </section>
    
      <section>
        <div className=""></div>
       
      </section>



   </main>
  )
}
