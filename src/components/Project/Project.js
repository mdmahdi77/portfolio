import React from 'react';
import Navbar from '../Navbar/Navbar';
import diamondWorld from '../../images/diamondWorld.PNG'
import foodStall from '../../images/foodStall.PNG'
import cruiseQueen from '../../images/cruiseQueen.PNG'
import doctors from '../../images/doctors-portal.PNG'
import mobile from '../../images/mobile.PNG'
import league from '../../images/league.PNG'
import panda from '../../images/panda.PNG'
import ProjectCard from '../ProjectCard/ProjectCard';


const projectData = [
    {
        title: "Doctors Portal",
        description: "A fullstack doctors-portal app using React JS, Node JS, Express JS, MongoDB, Bootstrap",
        code: "https://github.com/mdmahdi77/doctors-portal-client",
        live: "https://doctors-portal-project-63a75.web.app/",
        image: doctors
    },
    {
        title: "Diamond World",
        description: "A fullstack diamond world app using React JS, Node JS, MongoDB, Bootstrap",
        code: "https://github.com/mdmahdi77/Diamond-World-Client",
        live: "https://last-assignment-f788f.firebaseapp.com/",
        image: diamondWorld
    },
    {
        title: "Mobile Shop",
        description: "A fullstack e-commerce mobile shop app using React JS, Node JS, Express JS, MongoDB, Bootstrap",
        code: "https://github.com/mdmahdi77/mobile-shop-cllient",
        live: "https://assignment10-1.firebaseapp.com/",
        image: mobile
    },
    {
        title: "Food Stall",
        description: "Food Stall is a food searching app using HTML5, CSS3, Bootstrap, JavaScript and Netlify",
        code: "https://github.com/mdmahdi77/assignment-5",
        live: "https://youthful-leavitt-be35f7.netlify.app/",
        image: foodStall
    },
    {
        title: "Cruise Queen",
        description: "Cruise Queen is a ticket booking app using HTML5, CSS3, Bootstrap, JavaScript",
        code: "https://github.com/mdmahdi77/ninja-tickets",
        live: "https://loving-thompson-33f36f.netlify.app/",
        image: cruiseQueen
    },
    {
        title: "English Premier League",
        description: "English Premier League is sports related app using HTML5, CSS3, React js and netlify",
        code: "https://github.com/mdmahdi77/english-premiar-league",
        live: "https://elated-bassi-4506d7.netlify.app/",
        image: league
    },
    {
        title: "Panda Commerce",
        description: "Panda Commerce is e-commerce app using HTML4, CSS3, Bootstrap and netlify",
        code: "https://github.com/mdmahdi77/panda_commerce_bootstrape",
        live: "https://wonderful-sammet-2165fe.netlify.app/",
        image: panda
    }
]

const Project = () => {
    return (
        <section className="backgroundAll">
            <Navbar></Navbar>
            <div className="container">
                <div className="mt-5">
                    <h2 className="text-center headerAll">Projects</h2>
                </div>
                <div className="row py-5">
                    {
                        projectData.map(project => <ProjectCard project={project}></ProjectCard>)
                    }
                </div>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Project;