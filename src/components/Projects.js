import React, { useState } from 'react';
import react from '../assets/images/react.png';
import java from '../assets/images/java.jpg';
import js from '../assets/images/js.jpg';
import netcore from '../assets/images/netcore.png';

function Projects() {
  const categories = ['All', 'JavaScript', 'React.js', 'Asp.Net', 'Java'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectsArray = [
    {
      title: 'E-Commerce',
      description: 'E-Commerce App',
      category: 'Asp.Net',
      image: netcore,
      link: 'https://github.com/mertcan-taskiran/E-Ticaret',
    },
    {
      title: 'Blog App',
      description: 'Blog App',
      category: 'Asp.Net',
      image: netcore,
      link: 'https://github.com/mertcan-taskiran/BlogApp',
    },
    {
      title: 'Cafe App',
      description: 'Cafe App',
      category: 'Asp.Net',
      image: netcore,
      link: 'https://github.com/mertcan-taskiran/CafeApp',
    },
    {
      title: 'Shopping',
      description: 'Shopping',
      category: 'Asp.Net',
      image: netcore,
      link: 'https://github.com/mertcan-taskiran/Shopping',
    },
    {
      title: 'Quiz App',
      description: 'Quiz App',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/QuizApp',
    },
    {
      title: 'Task List',
      description: 'Task List App',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/TaskListApp',
    },
    {
      title: 'Music Player',
      description: 'MusicPlayer App',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/MusicPlayer',
    },
    {
      title: 'Countries',
      description: 'Countries API',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Countries-APIs',
    },
    {
      title: 'Age Calculator',
      description: 'Age Calculator',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Age-Calculator',
    },
    {
      title: 'Tip Calculator',
      description: 'Tip Calculator',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/TipCalculator',
    },
    {
      title: 'Password Checker',
      description: 'Password Checker',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Password-Checker',
    },
    {
      title: 'Count Down Timer',
      description: 'Count Down Timer',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Count-Down-Timer',
    },
    {
      title: 'Calculator',
      description: 'Calculator',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Calculator',
    },
    {
      title: 'Background Color Switcher',
      description: 'Background Color Switcher',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Background-Color-Switcher',
    },
    {
      title: 'Digital Clock',
      description: 'Digital Clock',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Digital-Clock',
    },
    {
      title: 'Grocery List',
      description: 'Grocery List',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Grocery-List',
    },
    {
      title: 'QRCode Generator',
      description: 'QRCode Generator',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/QRCode-Generator',
    },
    {
      title: 'Password Generator',
      description: 'Password Generator',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Password-Generator',
    },
    {
      title: 'Login Checker',
      description: 'Login Checker',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Login-Checker',
    },
    {
      title: 'TicTacToe',
      description: 'TicTacToe Game',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/TicTacToe-Game',
    },
    {
      title: 'Weather API',
      description: 'Weather API',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Weather-API',
    },
    {
      title: 'Food Recipe API',
      description: 'Food Recipe API',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Food-Recipe-API',
    },
    {
      title: 'Pexels API',
      description: 'Image Gallery Pexels API',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/ImageGallery-Pexels-API',
    },
    {
      title: 'Movie API',
      description: 'Movie API',
      category: 'JavaScript',
      image: js,
      link: 'https://github.com/mertcan-taskiran/Movie-API',
    },
    {
      title: 'Adventure Game',
      description: 'Adventure Game',
      category: 'Java',
      image: java,
      link: 'https://github.com/mertcan-taskiran/AdventureGame',
    },
    {
      title: 'Patika Clone',
      description: 'Patika Clone',
      category: 'Java',
      image: java,
      link: 'https://github.com/mertcan-taskiran/PatikaKlonu',
    },
    {
      title: 'Tourism Agency System',
      description: 'Tourism Agency System',
      category: 'Java',
      image: java,
      link: 'https://github.com/mertcan-taskiran/TurizmAcenteSistemi',
    },
    {
      title: 'Weather App',
      description: 'Weather App',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/weather-app',
    },
    {
      title: 'Contacts App',
      description: 'Contacts App',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/Contacts-App',
    },
    {
      title: 'To Do List',
      description: 'To Do List',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/ToDoList-React',
    },
    {
      title: 'Spend Money',
      description: 'Redux Spend Money',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/Redux-Spend-Money',
    },
    {
      title: 'Emoji Search',
      description: 'Emoji Search',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/emoji-search-master',
    },
    {
      title: 'Chat App',
      description: 'Chat App',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/react-chat-app',
    },
    {
      title: 'Markdown Previewer',
      description: 'Markdown Previewer',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/markdown-previewer',
    },
    {
      title: 'Notes App',
      description: 'Redux Notes App',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/Redux-Notes-App',
    },
    {
      title: 'Weather App',
      description: 'Redux Weather App',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/redux-weather',
    },
    {
      title: 'Covid19 Tracker',
      description: 'Covid19 Tracker',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/covid19-tracker',
    },
    {
      title: 'Vehicle Registration System',
      description: 'Java + React',
      category: 'React.js',
      image: react,
      link: 'https://github.com/mertcan-taskiran/Vehicle-Registration-System',
    },
    
  ];

  const filteredProjects = projectsArray.filter((project) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return project.category === selectedCategory;
    }
  });

  return (
    <section id="projects">
      <div className='row'>
        <div className='col'>
          <hr className='color-text' />
        </div>
        <div className='col-3 color-text fw-bold text-center'>
          Projects
        </div>           
        <div className='col'>
          <hr className='color-text' />
        </div>
      </div>
      <div className="vh-100">
        <div className="container text-center">            

          <div id='baslik-4' className='display-4 mb-3'>My Projects</div>       
          <div className='my-4'>
            <div className="btn-group" role="group">
              {categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  className='btn'
                  style={{
                    backgroundColor: selectedCategory === category ? '#38B2AC' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#38B2AC',
                    border: `1px solid #38B2AC`,
                  }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className='col-10 mx-auto'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {filteredProjects.map((project, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row g-4 justify-content-center">
                      <div className="col-md-3 col-sm-6">
                        <div id='card' className="card p-3 card-color">
                          <img src={project.image} className="card-img-top img-thumbnail img-fluid" alt={project.title} style={{ objectFit: 'cover', aspectRatio: '1/1' }} />
                          <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                          </div>
                          <a href={project.link} target='_blank' rel="noopener noreferrer" className='btn btn-dark mx-auto'><i className='fa-brands fa-github'></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon project-bg" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon project-bg" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
                   
            <div>
              <a href='#contact'><i className="fa-solid fa-chevron-down fa-2x color-text mt-3"></i></a>
            </div>

          </div>          
        </div>
      </div>
    </section>
  );
}

export default Projects;