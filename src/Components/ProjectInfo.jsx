import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import project from "../assets/projects"
import { FaExternalLinkAlt } from "react-icons/fa";
function ProjectInfo(){
    const {id} = useParams()
    const [information,setInformation]=useState([])
    const pro=project.filter((val,i)=>{
        return val.id==id
    })
    useEffect(()=>{
        setInformation([...pro])
    },[])
    console.log("information======",information)
    return(
        <>
        <div className="w-[100vw] pt-20 flex flex-col items-center gap-20  bg-[#030712]">
            <div>
                <h1 className="text-white text-xl font-semibold">{information[0]?.projectName}</h1>
            </div>
            <div className="w-[50%]">
                <img src={information[0]?.img} alt="" />
            </div>
            <div className="w-[50%]">
                <p className="text-white">{information[0]?.description}</p>
            </div>
            <div className="">
                <p className="text-white flex gap-10 text-xl"><span className="font-semibold">Category</span> <span className="text-green-400">{information[0]?.category}</span> </p>

            </div>
            <div className=" flex text-white">
                <div className="flex gap-2">
                    <div className="text-xl font-semibold">
                        Github Link:-
                    </div>
                    <div className="text-green-300 flex gap-2">
                        <a className="text-xl" href={information[0]?.gitLink}>{information[0]?.gitLink}</a>
                        <FaExternalLinkAlt/>
                    </div>
                </div>
            </div>
            {
                information[0]?.liveLink ? (<>
                <div className=" flex text-white">
                <div className="flex gap-2">
                    <div className="text-xl font-semibold">
                        Live Link:-
                    </div>
                    <div className="text-green-300 flex gap-2">
                        <a className="text-xl" href={information[0]?.liveLink}>{information[0]?.liveLink}</a>
                        <FaExternalLinkAlt/>
                    </div>
                </div>
            </div>                
                </>):("")
            }
            
            <div>

            </div>
        </div>
        </>
    )
}
export default ProjectInfo