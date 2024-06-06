const containerVariant = {
    hidden: {
        opacity: 0,
        transition: { when: "afterChildren" }
    },
    visible: {
        opacity: 1,
        transition: { delay: .5, staggerChildren: .2, when: "beforeChildren" }
    }
}

const navVariant = {

    hidden: {
        opacity: 0,
        x: "200px",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: .5 }
    }
}

const childVariant = { hidden: { opacity: 0, y: "-10px" }, visible: { opacity: 1, y: "0" } }




export { containerVariant, childVariant, navVariant }