import techee from "assets/techee.jpeg"
import travistTravel from "assets/travist-travel.png"
import carru from "assets/carru.png"
import membershipUpdate from "assets/membership-update.jpeg"
import membershipLogin from "assets/login.jpeg"

const projects = [
    {
        id: 0,
        title: "Techee e-commerce shop",
        description: "Built to provide users with a fast, reliable, and user-friendly platform to explore products, manage their carts, and complete purchases effortlessly—while showcasing the integration of APIs, cand scalable frontend architecture.",
        madeWith: ["React.js", "CSS", "Supabse"],
        repo: "https://github.com/kwamedanso/techee",
        liveDemo: "https://techee.netlify.app",
        imageUrl: techee,
        position: "left"
    },
    {
        id: 3,
        title: "Church Membership Data Update & ID Card Generator",
        description: "A secure web application designed to help church members update their personal details and automatically generate personalized digital ID cards. Each card includes a profile photo, member details, and a unique QR code for easy identification.",
        madeWith: ["React.js", "CSS", "Supabase"],
        repo: "https://github.com/kwamedanso/glorious-membership",
        liveDemo: "https://glorious-member-update.netlify.app/",
        imageUrl: membershipUpdate,
        position: "right"
    },

    {
        id: 2,
        title: "Travist Travel",
        description: "Built to simplify trip planning by allowing users to explore tours, view detailed itineraries, and make bookings online—highlighting skills in responsive design, API integration, and delivering seamless user experiences that inspire travel.",
        madeWith: ["React.js", "CSS"],
        repo: "https://github.com/kwamedanso/travist-travel",
        liveDemo: "https://travist-travel.netlify.app",
        imageUrl: travistTravel,
        position: "left"
    }, {
        id: 1,
        title: "Carru Car Rentals",
        description: "A responsive car rental platform that allows users to explore available vehicles, compare options, and book rentals with ease. Designed to streamline the car rental process by providing a user-friendly interfac.,",
        madeWith: ["React.js", "CSS"],
        repo: "https://github.com/kwamedanso/carru-car-rental.git",
        liveDemo: "https://carru-rentals.netlify.app/",
        imageUrl: carru,
        position: "right"
    },
]


export default projects;