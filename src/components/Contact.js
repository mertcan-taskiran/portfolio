import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [state, handleSubmit] = useForm("mgejbarv");

    const notifySuccess = () => toast.success('Your message has been delivered', { autoClose: 3000 });

    useEffect(() => {
        if (state.succeeded) {
            notifySuccess();
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }
    }, [state.succeeded]);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (
        <section id="contact">
            <div className='row'>
                <div className='col'>
                    <hr className='color-text' />
                </div>
                <div className='col-3 color-text fw-bold text-center'>
                    Contact
                </div>
                <div className='col'>
                    <hr className='color-text' />
                </div>
            </div>

            <div className="vh-100">
                <div className="container text-center">
                    <div id='contact-ortalama'>
                        <div id='baslik-5' className='display-4'>Contact Me</div>
                            
                        <div className='row my-3'>
                            <div className='col-md-6 mx-auto'>
                                <div className='links mb-3'>
                                    <a id='icon-4' href="mailto:mertcn.taskiran@gmail.com" target='_blank' rel="noopener noreferrer">
                                        <i className="fa-solid fa-envelope fa-2x"></i>
                                    </a>
                                    <a id='icon-5' href="https://github.com/mertcan-taskiran" className='mx-4' target='_blank' rel="noopener noreferrer">
                                        <i className="fa-brands fa-github fa-2x"></i>
                                    </a>
                                    <a id='icon-6' href="https://www.linkedin.com/in/mertcntaskiran" target='_blank' rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin fa-2x"></i>
                                    </a>
                                </div>

                                <form action='https://formspree.io/f/mgejbarv' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            id='name'
                                            type="name"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                        <ValidationError 
                                            prefix="Name" 
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            id='email'
                                            type="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Email"                                          
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            id='subject'
                                            type="subject"
                                            name="subject"
                                            value={formValues.subject}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Subject"                                     
                                        />
                                        <ValidationError 
                                            prefix="Subject" 
                                            field="subject"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            id='message'
                                            name="message"
                                            value={formValues.message}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            rows="5"
                                            placeholder="Message"                                        
                                        />
                                        <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <button id='color-bg-3' type="submit" className="btn text-light" disabled={state.submitting}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <ToastContainer position="top-right" />
        </section>
    );
}

export default Contact;
