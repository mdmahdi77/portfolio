import React from 'react';
import './FrontPage.css'
import photo from '../../images/myImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical'

const FrontPage = () => {
    return (
        <section className="frontPage mt-5 pt-5">
            <img src={photo} alt="" />
            <h3 className="my-3 text-white">I'm <span style={{color: '#0cff65'}}>MEHEDI HASAN</span> {' '}
                <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        'Frontend Web Developer', 2000, 'Programmer', 2000, 'Learner', 2000
                    ]}
                />
            </h3>
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