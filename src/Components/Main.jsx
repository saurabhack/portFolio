import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function Main(){
    return (
        <>
        <div className="w-[100vw] grow h-[100vh] max-md:pt-40  flex max-md:flex-col-reverse max-md:gap-10 bg-[#030712]">
            <div className="w-[50%] max-md:w-[100%] max-md:flex max-md:justify-start flex flex-col gap-4 justify-center ml-14 max-md:ml-2 max-md:p-4  ">
                <h1 className="text-2xl  font-semibold text-white">
                    Hi I'M Saurabh Kamane <span className="text-2xl">👋</span>
                </h1>
                <div className="w-[100%] text-white">
                    <p className="max-md:text-sm">I'm a UX Designer and a Developer (React.js & Node.js) with a focus on creating exceptional digital experiences that are user-centric, accessible, usable, visually appealing, and responsive. I have been  designing web and android applications for over a year and developing web applications for over a year now, I have a deep passion for designing and researching about user psychology.</p>
                </div>
                <div className="flex mt-4 gap-4">
                    <span><CiLocationOn className="text-xl max-md:text-sm text-white font-bold"/></span><span className="text-gray-400 max-md:text-sm">Maharashtra , India</span>
                </div>
                <div className="  gap-4">
                    <p className="text-gray-400 text-sm ml-4">Available For New Positions</p>
                </div>
                <div className="text-white flex gap-4 p-3">
                    <a href="https://github.com/saurabhack"><FaGithub className="text-2xl cursor-pointer"/></a>
                   <a href="https://www.hackerrank.com/profile/kamanesaurabh68"><FaHackerrank className="text-2xl cursor-pointer"/></a> 
                    <FaLinkedin className="text-2xl cursor-pointer"/>
                </div>
                
            </div>
            <div className="w-[50%] h-[100%] flex justify-center items-center max-md:ml-10   shadow-lg ">
                <img className="w-[40%] h-[50%] max-md:w-[100%] max-md:h-[100%]" src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" alt="" />
            </div>
        </div>
        </>
    )
}
export default Main