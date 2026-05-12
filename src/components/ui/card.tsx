
import { Link} from "@tanstack/react-router";
import { Button } from "./button";

interface StaffProps{
    name: string;
    link: string;
    image: string;
}

interface ServiceProps{
    title: string;
    description: string;
    icon?: string;
    image?: string;
    Icon?: React.ComponentType<{ size?: number; className?: string }>;
}



function StaffCard ({name, image, link}: StaffProps) {
return (
    <div className = "gap-4 justify-center items-center  border relative lg:h-85 h-50 w-full grid grid-cols-5 border-black rounded-2xl overflow-clip">
                  <div style={{ backgroundImage: `url(${image})` }} className={` absolute w-full h-full bg-center bg-cover  `}></div>
                  <div className = "bg-black w-full lg:h-1/4 h-1/4 flex justify-center items-center absolute bottom-0 right-0 rounded-b-2xl overflow-hidden"></div>
                  <div className = "absolute right-0  lg:p-5 p-2 bottom-0 flex flex-row justify-between items-baseline w-full">
                      <h1 className = " bottom-0 lg:text-2xl font-bold left-0  text-white">{name}</h1>
                      <Link to ={link}><Button size = "sm" className = " z-10  bg-white text-black hover:bg-black hover:border-white hover:text-white cursor-pointer border-white border top-20"type="submit">Book</Button></Link>
                  </div>
                  </div>

)
    
}

function ServicesCard({title, description, icon, image}: ServiceProps){

    return(
        <div className = " overflow-hidden relative border w-full  border-white rounded-2xl h-80 ">
                    
                      <div style={{ backgroundImage: `url(${image})` }} className={` z-200 w-full bg-cover bg-center h-full `}></div>


                    <div className = "h-full  z-100 bottom-0 ">
                      <div className = "bottom-0 p-5 absolute flex flex-col gap-4 over bg-black w-full h-1/4 lg:h-1/3">
                      
                      <h1 className = " top-0 text-2xl font-bold left-0  text-white">{title}</h1>
                      <p className = " top-0 text-md left-0 text-white">{description}</p>
                      <Link to ={"/"}><Button className = " rounded-2xl bg-red absolute z-10 m-5 right-0 bg-black border-white border text-white bottom-0"type="submit">Book</Button></Link>
                      </div>
                      </div>
                  </div> 
    )

}

function Services({title, description, Icon, image}: ServiceProps){

    return(
        <div className = "w-full relative flex lg:flex-row flex-col justify-between border-white border rounded-2xl p-5">
            <div className="relative lg:w-150  w-fullpr-10">
            <div className = "flex flex-row  items-baseline">
              <h1 className = "text-3xl text-bold mb-3 text-white">{title}</h1>
              {Icon && <Icon className = "invert ml-5" size = {24}/>}
</div>
              <h1 className = "text-white">{description}</h1>
              <Link to ={"/"}><Button size= "lg" className = " rounded-2xl bg-red  mt-10 z-10  right-0 bg-white border-white border text-black "type="submit">Book</Button></Link>
                  </div> 
                  <div style={{ backgroundImage: `url(${image})` }} className=" rounded-r-lg w-1/2 bg-center h-full bg-cover">
                    
                  </div >
                  </div>
    )

}

export {StaffCard, ServicesCard, Services}