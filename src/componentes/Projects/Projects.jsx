import React from 'react';
import './Projects.css'

import ProjectCard from './ProjectCard'; 

const projectsData = [
    {
        title: 'Project 1',
        imageSrc: 'src/img/poketrivia.png',
        description: 'Development of a single application game about Pokémon, guessing the names of the Pokémon and showing how many you can guess in a row. For each correct Pokémon name, you win 1 score. The purpose was understanding about APIs using ReactJS (Vite) & SASS for styling.',
        repository: 'https://github.com/klopezg95/Poketrivia/'
    },
    {
        title: 'Project 2',
        imageSrc: 'src/img/weatherapp.png',
        description: 'Development of a single application requesting weather information from around the world. Using ReactJS (Vite) & SASS for styling.',
        repository: 'https://github.com/klopezg95/WeatherAPP'
    },
    {
        title: 'Project 3',
        imageSrc: 'src/img/react-task.png',
        description: 'A single page application to-do list using ReactJS for functionality and Tailwind CSS for styles.',
        repository: 'https://github.com/klopezg95/react-task'
    }
];

function Projects() {
    return (
        <div className='bigcontainer-projects' id="projects">
            <h1>Projects</h1>
            <div className='brocontainer-projects'>
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;