import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';  
import { faReact} from '@fortawesome/free-brands-svg-icons';  
import { FaNodeJs } from "react-icons/fa";
import { faServer } from '@fortawesome/free-solid-svg-icons'; 
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";









function Skills(){
    return(
        <>
        <div className="w-[100vw]  flex flex-col gap-10 items-center pt-20 bg-[#030712]">
            <div  className='bg-gray-400 p-3 w-40 flex justify-center rounded-xl '>
                <p className='text-white text-xl font-semibold max-md:text-lg'>Skills</p>
            </div>
            <div >
                <p className='text-xl max-md:text-lg max-md:p-3 text-white'>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className='grid grid-cols-5 gap-20  max-md:grid-cols-3 max-md:p-4'>
                <div className='flex flex-col items-center gap-2'>
                <FontAwesomeIcon className='w-20 h-20' icon={faJs} style={{color: "#FFD43B",}} />
                    <p className='text-white'>Javascript</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FontAwesomeIcon className='w-20 h-20' icon={faReact} style={{color: "#74C0FC",}} />
                    <p className='text-white'>React</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FaNodeJs className='text-green-500 w-20 h-20'/>
                <p className='text-white'>NodeJs</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiExpress className='text-white w-20 h-20'/>
                    <p className='text-white'>ExpressJs</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiPostgresql className='text-[#336791] w-20 h-20'/>
                    <p className='text-white'>PostGreSQL</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiMongodb  className='text-green-700 w-20 h-20'/>
                    <p className='text-white'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <RiNextjsFill  className='text-white w-20 h-20'/>
                    <p className='text-white'>Next js</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiMysql  className='text-white w-20 h-20'/>
                    <p className='text-white'>MySql</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiPostman  className='text-[#FF6C37] w-20 h-20'/>
                    <p className='text-white'>Postman</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <SiNetlify  className='text-red-600 w-20 h-20'/>
                    <p className='text-white'>Netlify</p>
                </div>
            </div>
            <div>
            <p className='text-xl text-white'>programming languages :</p>
            </div>
            <div className='grid grid-cols-4 gap-10 max-md:grid-cols-3'>
            <div className='flex flex-col items-center gap-2'>
                <TbBrandCpp className=' text-[#00599C] w-20 h-20'  />
                    <p className='text-white'>C Plus Plus</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FaPython className=' text-[#3776AB] w-20 h-20'  />
                    <p className='text-white'>Python</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FaJava className=' text-[#007396] w-20 h-20'  />
                    <p className='text-white'>Java</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                <FontAwesomeIcon className='w-20 h-20' icon={faJs} style={{color: "#FFD43B",}} />
                    <p className='text-white'>Javascript</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Skills