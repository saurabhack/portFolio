import Ecommerce from "./ProjectImages/Ecommerce.png"
import languageTranslator from "./ProjectImages/languageTranslator.png"
import StarBlog from "./ProjectImages/starBlog.jpeg"
import ContactApp from "./ProjectImages/contactApp.png"
import Netflix from "./ProjectImages/netflix.png"
export const project = [
    {
        id: 1,
        projectName: "Ecommerce Website",
        techStack: "React.js, Tailwind CSS",
        category: "front-end",
        img: Ecommerce,
        description: "A dynamic ecommerce website that provides a seamless shopping experience for users. Built using React.js and styled with Tailwind CSS, this project features a responsive layout, product listings, a shopping cart, and checkout functionalities. It showcases effective use of state management and API integration for a smooth and interactive user interface.",
        gitLink: "https://ecommerce-in-react-red.vercel.app/",
        liveLink:"https://ecommerce-in-react-red.vercel.app/"
    },
    
    {
        id: 3,
        projectName: "English to Spanish Translator",
        techStack: "React.js, Tailwind CSS",
        category:"front-end",
        img: languageTranslator,
        description: "A language translation app built with React.js and Tailwind CSS, offering real-time English-to-Spanish translation through API integration. This project highlights API handling and dynamic UI updates, making it a simple but effective tool for users looking to translate text instantly.",
        gitLink: "https://github.com/saurabhack/languageTranslatorIsAvailable.git",
        liveLink: "https://language-translator-is-available.vercel.app/"
    },
    {
        id: 4,
        projectName: "Star Blog",
        techStack: "EJS, Node.js, Express.js, MongoDB, Tailwind CSS",
        category:"backend",
        img: StarBlog,
        description: "A full-stack blogging application built with EJS, Node.js, Express.js, MongoDB, and styled with Tailwind CSS. This app provides a platform for users to create, edit, and manage blog posts, with data persistence through MongoDB. It demonstrates backend development skills with Express and MongoDB, while EJS enables dynamic templating for a seamless user experience.",
        gitLink: "https://github.com/saurabhack/Star_Blog.git",
    },
    {
        id: 5,
        projectName: "Contact App",
        techStack: "React.js, Firebase, Tailwind CSS",
        category:"front-end",
        img: ContactApp,
        description: "A contact management system built with React.js and Firebase, styled with Tailwind CSS. This app allows users to add, edit, delete, and view contacts with real-time data updates via Firebase. It showcases integration of Firebase Firestore for data storage and real-time syncing, making it a functional example of React with a backend-as-a-service.",
        gitLink: "https://github.com/saurabhack/Contact_app_using_react_and_Firebase.git",
        liveLink: "https://contact-app-using-react-and-firebase-swart.vercel.app/"
    },
    {
        id:6,
        projectName:"Netflix Clone",
        techStack:"React.js , Firebase , Css3 , ReduxToolKit",
        category:"front-end",
        img:Netflix,
        description:"A netflix clone 2.0 , it is build with the help of react , firebase and css3 and redux , farebase is used for authentication and redux is used to manage complex state of the application",
        gitLink:"https://github.com/saurabhack/netFlixClone.git",
        liveLink:"https://net-flix-clone-5pd2.vercel.app/"
    }
];

export default project;
