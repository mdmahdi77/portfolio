import React from 'react';
import FrontPage from '../FrontPage/FrontPage';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className="background-page">
            <Navbar></Navbar>
            <FrontPage></FrontPage>
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
    );
};

export default Home;