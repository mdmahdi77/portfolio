import React from 'react';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jhumeew', 'template_twodp3u', e.target, 'user_AMeapHjTzY0VZzVhKHlTz')
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });
      }

    return (
        <section className="backgroundAll">
            <Navbar></Navbar>
            <div className="container">
                <h2 className="text-center my-5 headerAll">Contact With Me</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" name="name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email Address" name="email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="" cols="30" rows="10" placeholder="Message" name="message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="mainBtn mb-5">Send</button>
                            </div>
                        </form>
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
        </section>
    );
};

export default Contact;