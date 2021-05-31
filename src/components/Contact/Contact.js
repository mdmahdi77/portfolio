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
            e.target.reset()
    }

    return (
        <section className="backgroundAll">
            <Navbar></Navbar>
            <div className="container">
                <h2 className="text-center my-5 headerAll">Contact With Me</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form className="contact-form mb-5 pb-5" onSubmit={sendEmail}>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="Name" name="user_name" />
                            </div>
                            <div className="form-group my-2">
                                <input type="email" className="form-control" placeholder="Email" name="user_email" />
                            </div>
                            <div className="form-group my-2">
                                <input type="number" className="form-control" placeholder="Phone" name="contact_number" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="Subject" name="user_subject" />
                            </div>
                            <div className="form-group my-2">
                                <textarea name="message" rows="5" placeholder="Message" className="form-control" />
                            </div>
                            <div className="my-2">
                                <input type="submit" className="mainBtn" value="Send" />
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