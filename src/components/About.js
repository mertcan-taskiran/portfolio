import React from 'react';

function About() {

    return (
        <section id="about">

            <div className='row'>
                <div className='col'>
                    <hr className='color-text' />
                </div>
                <div className='col-3 color-text fw-bold text-center'>
                    About
                </div>
                <div className='col'>
                    <hr className='color-text' />
                </div>
            </div>

            <div className="vh-100">
                <div className="container text-center">                  
                    <div className="row">
                        <div id='baslik-1' className='display-4 mb-3'>About Me</div>
                        <div className='col-md-6 mx-auto'>
                            <p id='color-black-3'>Hello, I'm Mertcan. I was born and live in Ankara in 1998. I graduated from Fırat University Software Engineering department. My curiosity in the software world and my determination to develop my potential in this field led me to this dynamic sector.</p>                                   
                            <p id='color-black-5'>In order to increase my skills in software development, I took part in various projects and had the chance to work with different programming languages. These experiences allowed me to both strengthen my coding skills and improve myself in technological diversity.</p>
                            <p id='color-black-6'>I focused on strengthening my fast learning and problem-solving skills during the coding process. This has helped me increase my ability to work effectively and efficiently on projects. Additionally, by following the innovations in the software world, I constantly keep myself updated to find the best solutions applicable to projects.</p>
                            <p id='color-black-7'>My desire to do research has allowed me to follow current technology trends and developments in the industry and make this information valuable in my projects. My high motivation and fondness for teamwork show that I am constantly striving to achieve the best results in every project and to create a harmonious collaboration environment within the team.</p>
                            <div>
                                <a href='#skills'><i className="fa-solid fa-chevron-down fa-2x color-text mt-1"></i></a>
                            </div>
                        </div>
                    </div>                      
                </div>
            </div>
        </section>
      );
}

export default About;