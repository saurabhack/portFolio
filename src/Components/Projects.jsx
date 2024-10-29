import {useEffect, useState} from "react"
import project from "../assets/projects.js"
import ProjectCart from "./ProjectCarts.jsx"
import { Link } from "react-router-dom"
function Projects(){
    const [data,setData]=useState([...project])
    // const [category,setCategory]=useState("All")
    console.log("data=========",data)

    function filterData(category="all"){
        if(category=="all"){
            setData(project)
        }else{

        const filteredData=project.filter((val,i)=>{
            return val?.category==category
        })
        setData(filteredData)
        }
    }
    useEffect(()=>{
        filterData()
    },[])

    return(
        <>
        <div className="w-[100vw]   flex flex-col grow  pt-10   bg-[#030712] gap-20">
            <div className="text-white w-full pt-10  flex justify-center max-md:p-3 gap-10">
                <div className="p-2 bg-gray-400 rounded-xl cursor-pointer max-md:p-2 max-md:text-sm max-md:w-[200px] max-md:h-[50%] max-md:text-center" onClick={()=>filterData("all")}>All</div>
                <div className="p-2 bg-gray-400 rounded-xl cursor-pointer max-md:p-2 max-md:text-sm max-md:w-[200px] max-md:h-[50%] max-md:text-center" onClick={()=>filterData("front-end")}>Front-End</div>
                <div className="p-2 bg-gray-400 rounded-xl cursor-pointer max-md:p-2 max-md:text-sm max-md:w-[200px] max-md:h-[50%] max-md:text-center" onClick={()=>filterData("backend")}>Back-End</div>
                <div className="p-2 bg-gray-400 rounded-xl cursor-pointer max-md:text-xs max-md:p-2 max-md:w-[400px] max-md:h-[50%] max-md:text-left">Live Projects / Hosted Projects</div>
            </div>
            <div className="w-full flex justify-center p-5">
            <div className="w-[60%] grid grid-cols-3 gap-20 max-md:grid-cols-1 max-md:w-[80%]">
                
                {

                    data.map((val,i)=>{

                     return <Link to={`/ProjectInfo/${val.id}`}>
                     <ProjectCart key={i} projects={val}/>
                     </Link> 
                    })
                }

                
            </div>
            </div>
        </div>
        </>
    )
}
export default Projects