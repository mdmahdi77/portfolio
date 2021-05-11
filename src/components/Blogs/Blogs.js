import React from 'react';
import Navbar from '../Navbar/Navbar';
import jsPic from '../../images/js-logo.png'
import jsPic2 from '../../images/JavaScript2.jpg'
import react from '../../images/react.png'
import jsPic3 from '../../images/javascript3.jpg'
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        img: jsPic,
        title: 'Upgrade Your JavaScript Skill',
        link: 'https://mehedihasan-42996.medium.com/javascript-basic-8f68f17d01e6'
    },
    {
        img: jsPic2,
        title: 'JavaScript Basic',
        link: 'https://mehedihasan-42996.medium.com/how-to-improve-your-javascript-skills-c29850d315d3'
    },
    {
        img: react,
        title: 'React Core Concept',
        link: 'https://mehedihasan-42996.medium.com/introduction-to-react-js-a78901ba1b56'
    },
    {
        img: jsPic3,
        title: 'JavaScript Concept',
        link: 'https://mehedihasan-42996.medium.com/javascript-concept-9214ecf30c14'
    },
]

const Blogs = () => {
    return (
        <section className="backgroundAll">
            <Navbar></Navbar>
            <div className="container">
                <h2 className="text-center my-5 headerAll">Blogs</h2>
                <div className="row py-5">
                {
                        blogsData.map(project => <BlogPost project={project}></BlogPost>)
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

export default Blogs;