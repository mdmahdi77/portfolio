import React from 'react';
import Navbar from '../Navbar/Navbar';
import photo from '../../images/myimage2.png'
import './About.css'

const About = () => {
    return (
        <section className="backgroundAbout about">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="my-5" src={photo} alt="" />
                        <h2 style={{color: '#080808'}}><span style={{color: '#20ff5e'}}>I'm</span> Mehedi Hasan</h2>
                        <p className="text-justify text-lead text-white">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="mt-5 text-white">My Skills Set</h4>
                        <div className="skillPartOne">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>React JS</span>
                            <span>Node JS</span>
                            <span>Express JS</span>
                            <span>MongoDB</span>
                            <span>Git</span>
                            <span>Firebase</span>
                            <span>Heroku</span>
                            <span>Netlify</span>
                            <span>Sass</span>
                            <span>Redux</span>
                            <span>React Native</span>
                            <span>Wordpress</span>
                            <span>Php</span>
                        </div>
                        <h4 className="mt-5 text-white">I want to work with</h4>
                        <div className="skillPartTwo">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>React JS</span>
                            <span>Node JS</span>
                            <span>Express JS</span>
                            <span>MongoDB</span>
                        </div>
                        <h4 className="mt-5 text-white">I prefer not to work with</h4>
                        <div className="skillPartThree">
                            <span>Sass</span>
                            <span>Redux</span>
                            <span>React Native</span>
                            <span>Wordpress</span>
                            <span>Php</span>
                        </div>
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
            </div>
        </section>
    );
};

export default About;