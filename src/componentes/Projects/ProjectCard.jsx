import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className='container-project'>
            <h2>{project.title}</h2>
            <img src={project.imageSrc} alt={project.title}/>
            <p>{project.description}</p>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
    );
}

export default ProjectCard;