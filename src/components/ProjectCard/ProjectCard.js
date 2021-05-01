import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import  './ProjectCard.css'

const ProjectCard = (props) => {
    const { title, description, code, live, image } = props.project
    return (
        <div className="col-md-4 col-sm-6 col-12 my-sm-3 my-3 text-center">
            <div class="card h-100">
                <img style={{ height: '200px' }} src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-white">{title}</h5>
                    <p class="card-text text-white">{description}</p>
                    <div className="siteLink">
                        <div className="githubLink">
                            <a href={code} target="_blank" className="text-white"><FontAwesomeIcon className="icon mr-1" icon={faGithub} />Github</a>
                        </div>
                        <div className="liveLink">
                            <a href={live} target="_blank" className="text-white">Live Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;