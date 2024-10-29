import { CiLocationOn } from "react-icons/ci"
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa"

function About(){
    return(
        <>
        <div className="w-[100vw]   flex flex-col  grow  pt-10    bg-[#030712]">
            <div className="flex justify-center mt-4 w-[100%] h-[20%] items-center ">
                <h1 className="text-gray-300 p-2 text-xl h-13 font-semibold bg-gray-400 rounded-xl opacity-11 ">About Me</h1>
            </div>
            <div className="flex max-md:flex-col gap-10 mt-10 p-3 mb-6">
                <div className="w-[50%] max-md:w-[100%] flex justify-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
                </div>
                <div className="text-white w-[50%] max-md:w-[100%]  flex flex-col max-md:items-center gap-4">
                    <h1 className="text-xl max-md:text-1xl font-semibold">Curious about me? Here you have it:</h1>
                    <div className="text-sm text-gray-300 w-[80%] flex flex-col gap-4 max-md:p-2">
                        <p className="text-left ">
                        I'm a passionate, self-proclaimed designer who specializes in UX Designing and Web Development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p className="text-left">
                        I have started my journey over a year back as a designer and a web developer in 2023, and since then, I've continued to grow and evolve as a designer and a developer, taking on new challenges and learning the latest technologies along the way.
                        </p>
                        <p className="text-left">
                        I am trying to learn and evolve everyday by taking up new challenges and learning new things on a day to day basis. I love learning about user psychology and make a valuable user experience for all type of users. 
                        </p>
                        <p className="text-left">
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        </p>
                        <p className="text-left">
                        Finally, some quick bits about me.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <li>BCA (Bachelors in computer application)</li>
                            <li>Tech Geek</li>
                            <li>Freelancer</li>
                            <li>UX Designer</li>
                        </div>
                        <div>
                        One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About