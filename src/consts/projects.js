import techee from "assets/techee.jpeg"
import travistTravel from "assets/travist-travel.png"
import carru from "assets/carru.png"

const projects = [
    {
        id: 0,
        title: "Techee e-commerce shop",
        description: "With the focus on simplicity and clean desing, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
        madeWith: ["React.js", "CSS", "Supabse"],
        repo: "https://github.com/kwamedanso/techee",
        liveDemo: "https://techee.netlify.app",
        imageUrl: techee,
        position: "left"
    },
    {
        id: 1,
        title: "Carru Car Rentals",
        description: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
        madeWith: ["React.js", "CSS"],
        repo: "https://github.com/kwamedanso/carru-car-rental.git",
        liveDemo: "https://techee.netlify.app",
        imageUrl: carru,
        position: "right"
    },
    {
        id: 2,
        title: "Travist Travel",
        description: "With the focus on simplicity and clean desing, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
        madeWith: ["React.js", "CSS"],
        repo: "https://github.com/kwamedanso/travist-travel",
        liveDemo: "https://travist-travel.netlify.app",
        imageUrl: travistTravel,
        position: "left"
    }
]


export default projects;