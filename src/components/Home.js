import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import cv from '../assets/pdf/cv.pdf';

function Home() {

  const [text] = useTypewriter({
    words: ['Developer', 'Designer'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  const downloadCv = () => {
    const cvFilePath = cv;
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <section id="home" className="vh-100">
      <div id='home-ortalama' className="container text-center">
        <h1 id='color-black-1' className="display-2">Hi, my name is Mertcan.</h1>
        <h1 className="color-text display-2">I'm a software engineer.</h1>

        <p id='color-black-2' className="display-6 my-5">
          <span>I'm a {text}</span>
          <Cursor cursorColor='#38B2AC' />
        </p>

        <div className='links mb-5'>
          <a id='icon-3' href="https://www.linkedin.com/in/mertcntaskiran" target='_blank' rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a id='icon-2' href="https://github.com/mertcan-taskiran" className='mx-4' target='_blank' rel="noopener noreferrer">
              <i className="fa-brands fa-github fa-2x"></i>
          </a>         
          <a id='icon-1' href="mailto:mertcn.taskiran@gmail.com" target='_blank' rel="noopener noreferrer">
              <i className="fa-solid fa-envelope fa-2x"></i>
          </a>
        </div>

        <button id='color-bg-2' className='btn rounded-5 text-light mb-5' onClick={downloadCv}>Download CV <i className="fa-solid fa-download fa-bounce text-light"></i></button>
        
        

        <div>
          <a href='#about'><i className="fa-solid fa-chevron-down fa-2x color-text"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Home;