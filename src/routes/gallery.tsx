import { createFileRoute } from '@tanstack/react-router'
import {motion} from "framer-motion"

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

const images = [
  { url: '/assets/cust1.jpg', name: 'Image 1' },
  { url: '/assets/cust2.jpg', name: 'Image 2' },
  { url: '/assets/cust3.jpg', name: 'Image 3' },
  { url: '/assets/cust4.jpg', name: 'Image 4' },
  { url: '/assets/cut1.jpg', name: 'Image 5' },
  { url: '/assets/barberheader.jpg', name: 'Image 6' },
  { url: '/assets/shop1.jpg', name: 'Image 7' },
  { url: '/assets/portraits/p1.jpg', name: 'Image 7' },
  { url: '/assets/portraits/p2.jpg', name: 'Image 7' },
];

function RouteComponent() {
  return <main><section className = "w-screen h-auto lg:p-20 pt-20 p-5">
    
    <motion.h1 initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            
             className = "text-black font-black lg:text-9xl mt-10 text-6xl w-full">GALLERY</motion.h1> 

    <motion.div 
    
    
    className = "overflow-hidden w-full flex flex-col min-h-screen   bg-background  ">
    <div className = "overflow-hidden w-full text-8xl  ">
   

          <div className="columns-1 md:columns-2 2xl:columns-4 gap-2 pt-20 pb-15">
        {images.map((image, index) => (
          <>
          <div key={index} className="mb-2 break-inside-avoid transition-all hover:opacity-80 hover:scale-102">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-auto rounded-2xl transition-all cursor-pointer"
              // onClick={()=>displayLightbox(index)}
            />
          </div>

          

          </>
        ))}

        


      </div>
     
            


        </div>
        </motion.div>
    
    </section></main>
}
