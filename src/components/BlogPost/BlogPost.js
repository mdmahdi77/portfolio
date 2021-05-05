import React from 'react';
import './BlogPost.css'

const BlogPost = (props) => {
    const {img, title, link} = props.project
    return (
        <div className="col-lg-4 col-md-6 col-12 my-sm-3 my-3 text-center">
            <div class="card blog h-100">
                <img style={{ height: '200px' }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-white">{title}</h5>
                    <div className="">
                        <div className="">
                            <a href={link} target="_blank" className="text-white">Read</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;