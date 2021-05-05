import React from 'react';
import Navbar from '../Navbar/Navbar';
import jsPic from '../../images/js-logo.png'
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        img: jsPic,
        title: 'Upgrade Your JavaScript Skill',
        link: 'https://mehedihasan-42996.medium.com/javascript-basic-8f68f17d01e6'
    }
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