import emailjs from "emailjs-com";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const notify = () => toast.success('Your Message Has Been Sent!', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_f89nheh', 'template_cxwg78f', e.target, 'vmzMRfWoAtzVwd8SP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    return (
        <div>
            <div class="row" id="contact">
                <div class="col navMenu">
                    <h2 class="text-center">~ N'hésitez pas à nous contacter ~</h2>
                    <div className="container">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input onClick={notify} type="submit" className="btn btn-info" value="Send Message"></input>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}