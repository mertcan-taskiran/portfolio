import React, { useState, useEffect } from 'react';

function Skills() {
    const [skills, setSkills] = useState([
        { name: 'HTML', progress: 95 },
        { name: 'CSS', progress: 90 },
        { name: 'Bootstrap', progress: 90 },
        { name: 'JavaScript', progress: 75 },
        { name: 'React', progress: 60 },
        { name: 'Angular', progress: 40 },
        { name: '.Java', progress: 60 },
        { name: 'C#', progress: 50 },
        { name: '.NetCore', progress: 50 },
        { name: 'Python', progress: 40 },
        { name: 'SQL', progress: 60 },
    ]);

    useEffect(() => {
        const simulatedSkills = [
            { name: 'HTML', progress: 95 },
            { name: 'CSS', progress: 90 },
            { name: 'Bootstrap', progress: 90 },
            { name: 'JavaScript', progress: 75 },
            { name: 'React', progress: 60 },
            { name: 'Angular', progress: 40 },
            { name: '.Java', progress: 60 },
            { name: 'C#', progress: 50 },
            { name: '.NetCore', progress: 50 },
            { name: 'Python', progress: 40 },
            { name: 'SQL', progress: 60 },
        ];

        setSkills(simulatedSkills);
    }, []);

    function getColorClass(progress) {
        if (progress >= 90) {
            return 'bg-success';
        } else if (progress >= 70) {
            return 'bg-primary';
        } else if (progress >= 50) {
            return 'bg-info';
        } 
        else if (progress >= 30) {
            return 'bg-warning';
        }
        else {
            return 'bg-danger';
        }
    }

    return (
        <section id="skills">
            <div className="row">
                <div className='col'>
                    <hr className='color-text' />
                </div>
                <div className="col-3 color-text fw-bold text-center">
                    Skills
                </div>
                <div className="col">
                    <hr className='color-text' />
                </div>
            </div>
            <div className="vh-100">
                <div className="container text-center">

                    <div id='baslik-2' className='display-4 mb-3'>My Skills</div>

                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="fw-bold color-text">{skill.name}</div>
                                    <div className="progress" role="progressbar" aria-label={`Progress for ${skill.name}`} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100">
                                        <div className={`progress-bar progress-bar-striped fw-bold ${getColorClass(skill.progress)}`} style={{ width: `${skill.progress}%`}}>
                                            {`${skill.progress}%`}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <a href='#experience'><i className="fa-solid fa-chevron-down fa-2x color-text mt-1"></i></a>
                            </div>
                        </div>                        
                    </div>
                  
                </div>
            </div>
        </section>
    );
}

export default Skills;