function ProjectCart({ projects }) {
    console.log("projects ===", projects);

    
    const shortDescription = projects.description.length > 100 
        ? projects.description.substring(0, 100) + "..." 
        : projects.description;

    return (
        <div className="flex flex-col gap-4 rounded-xl cursor-pointer  bg-blue-100 shadow-lg hover:bg-blue-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div>
                <img src={projects.img} alt="" className="rounded-t-xl" />
            </div>
            <div className="p-2">
                <h1 className="text-xl font-semibold text-gray-800">{projects.projectName}</h1>
            </div>
            <div className="p-2">
                <p className="text-gray-700">{shortDescription}</p>
            </div>
            <div className="p-2">
                <p className="text-gray-600">{projects.techStack}</p>
            </div>
        </div>
    );
}

export default ProjectCart;
