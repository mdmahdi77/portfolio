import React from 'react';
import './FrontPage.css'
import photo from '../../images/myImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const FrontPage = () => {
    return (
        <section className="frontPage mt-5 pt-5">
            <img src={photo} alt="" />
            <h2 className="my-3 text-white">Web Developer | Programmer | Learner</h2>
            <ul className="social-media list-inline">
                <li className="list-inline-item">
                    <a href="https://www.facebook.com/profile.php?id=100006789187624" target="_blank"><FontAwesomeIcon className="icon mx-2" icon={faFacebookF} /></a>
                </li>
                <li className="list-inline-item">
                    <a href="https://github.com/mdmahdi77" target="_blank"><FontAwesomeIcon className="icon mx-2" icon={faLinkedinIn} /></a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mehedi-hasan-389425211/" target="_blank"><FontAwesomeIcon className="icon mx-2" icon={faGithub} /></a>
                </li>
            </ul>
        </section>
    );
};

export default FrontPage;