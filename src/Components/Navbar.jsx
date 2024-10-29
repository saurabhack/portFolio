import { Link } from "react-router-dom";
import NewNavbar from "./NewNavbar";

function Navbar() {
    return (
        <>
            <div className="hidden max-sm:block w-[100vw] bg-[#030712] h-[10vh]">
                <h1></h1>
            </div>
            <div className="w-full h-[10vh] flex bg-[#030712] max-md:hidden text-white fixed">
                
                <div className="w-[20%] flex justify-center ml-3 items-center">
                    <h1 className="text-2xl font-semibold">{"< Saurabh Kamane />"}</h1>
                </div>


                <div className="w-[60%] flex justify-end items-center gap-8 pr-4">
                    <Link to="/" className="cursor-pointer hover:text-gray-400">Home</Link>
                    <Link to="/about" className="cursor-pointer hover:text-gray-400">About</Link>
                    <Link to="/projects" className="cursor-pointer hover:text-gray-400">Projects</Link>
                    <Link to="/skills" className="cursor-pointer hover:text-gray-400">Skills</Link>
                    <Link to="/contactMe" className="cursor-pointer hover:text-gray-400">Contact Me</Link>
                </div>

                
                <div className="w-[20%] flex justify-center items-center">
                    <a href="./assets/saurabhKamaneResume.pdf" download="saurabhKamaneResume.pdf">
                        <button className="bg-white text-black font-semibold p-2 rounded-xl hover:bg-gray-200 transition-colors">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
