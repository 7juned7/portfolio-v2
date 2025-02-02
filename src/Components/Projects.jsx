import React from 'react'
import project1 from "../assets/video/Where in the World.mp4"
import project2 from "../assets/video/registerKaro.mp4"
import project3 from "../assets/video/teach easy.mp4"
import project4 from "../assets/video/React App (2).mp4"
import project5 from "../assets/video/React App (3).mp4"
import project6 from "../assets/video/React App (1).mp4"
import project7 from "../assets/video/dylan Estate.mp4"
import github from "../assets/github.svg"
import web from "../assets/web.svg"
const Projects = () => {
    const projects = [
        {
            title: "Where In the world",
            about: "A website that provides details of all countries, including population, languages etc",
            liveLink: "https://7juned7.github.io/Where-in-the-World/",
            gitLink: "https://github.com/7juned7/Where-in-the-World",
            video: project1
        },
        {
            title: "Register Karo",
            about: "React + tailwind based landing page of a register karo website.",
            liveLink: "https://registerkaro-pgf5.vercel.app/",
            gitLink: "https://github.com/7juned7/registerkaro",
            video: project2
        },
        {
            title: "TeachEasy",
            about: "A Fullstack CRUD app helping teacher to easily manage there students.",
            liveLink: "https://webjuncture.example.com",
            gitLink: "https://github.com/7juned7/Teacheasy-v-2",
            video: project3
        },
        {
            title: "Pixy",
            about: "Want to download some images thats your place to look for based on react",
            liveLink: "https://7juned7.github.io/pixy_roc8Assignment/",
            gitLink: "https://github.com/7juned7/pixy_roc8Assignment",
            video: project4
        },
        {
            title: "Product Analytic",
            about: " A anaylitic dashboard fetching complicated data and giving meaning to it",
            liveLink: "https://mellow-donut-40915f.netlify.app/",
            gitLink: "https://github.com/7juned7/product-analytics-dashboard",
            video: project5
        },
        {
            title: "Email-client",
            about: "A new layout for you emails!",
            liveLink: "https://email-clientroc8.netlify.app/",
            gitLink: "https://github.com/7juned7/email-client-app",
            video: project6
        },
        {
            title: "Real Estate",
            about: "List you property now!!",
            liveLink: "https://realestateassignment.netlify.app/",
            gitLink: "https://github.com/7juned7/realestateassignment",
            video: project7
        }
    ];
    return (
        <div className='md:p-20 sm:10 p-2 py-10 w-full'  >
            <h2 className='text-4xl text-center mb-4' >Some of the projects I have build</h2>
            <div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white flex flex-col justify-end shadow-lg rounded-2xl p-4 hover:translate-y-[-10px] cursor-pointer">
                            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-3">{project.about}</p>

                            <video
                                autoPlay
                                loop
                                className="w-full rounded-lg mb-3"
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="flex justify-between">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:scale-[1.1] w-[25px]"
                                >
                                    <img src={web} alt="" />
                                </a>
                                <a
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:scale-[1.1] w-[25px]"
                                >
                                    <img src={github} alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;