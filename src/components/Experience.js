import React, { useState } from 'react';

function Experience() {

  const categories = ['University', 'Certificate', 'Internship'];
  const [selectedCategory, setSelectedCategory] = useState('University');
  const accordionData = [
    {
      title: 'Fırat University',
      content: "Fırat University / Software Engineering",
      date: "Sep'19 - Mar'23",
      category: "University"
    },
    {
      title: 'Başkent University',
      content: "Başkent University / Computer Programming",
      date: "Sep'16 - Jun'23",
      category: "University"
    },
    {
      title: 'Patika.dev',
      content: "6 Months Software Training Support",
      date: "Apr'23 - Oct'23",
      category: "Certificate"
    },
    {
      title: 'Udemy',
      content: "Web Development Training +120 Hours",
      date: "2022",
      category: "Certificate"
    },
    {
      title: 'Udemy',
      content: "Python - Data Science - Deep Learning - Machine Learning",
      date: "2022",
      category: "Certificate"
    },
    {
      title: 'Workplace Training',
      content: "ODTU TEKNOKENT - ARGOSAI",
      date: "2021-2022 / 4 Months",
      category: "Internship"
    },
    {
      title: 'Internship',
      content: "Aypik Defense Systems",
      date: "20 Days",
      category: "Internship"
    },
  ];

  const filteredData = accordionData.filter((project) => {
    if (selectedCategory === '') {
      return true;
    } else {
      return project.category === selectedCategory;
    }
  });

  return (
    <section id="experience">
      <div className='row'>
        <div className='col'>
          <hr className='color-text' />
        </div>
        <div className='col-3 color-text fw-bold text-center'>
          Experience
        </div>
        <div className='col'>
          <hr className='color-text' />
        </div>
      </div>
      <div className="vh-100">
        <div className="container text-center"> 

          <div id='baslik-3' className='display-4 mb-3'>My Experiences</div>

          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <div className='my-4'>
                
                <div className="btn-group" role="group">
                  {categories.map((category, index) => (
                    <button
                      id='category-btn'
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
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {filteredData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index === 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#accordionCollapse-${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                      >
                        {item.title}                       
                      </button>
                    </h2>
                    <div
                      id={`accordionCollapse-${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    >
                      <div className="accordion-body d-flex justify-content-between">
                        <div>
                          {item.content}
                        </div>
                        <div>
                          {item.date}
                        </div>                                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>  
              <div>
                <a href='#projects'><i className="fa-solid fa-chevron-down fa-2x color-text mt-3"></i></a>
              </div>      
            </div>
          </div>           
        </div>
      </div>
    </section>
  );
}

export default Experience;
