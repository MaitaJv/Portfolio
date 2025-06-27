import { useState } from 'react'
import Project from './Project/Project'
import projects_data from '../../data/projects.json'
import type { ProjectData } from '../../interfaces/types'
import './Projects.css'

const Projects = () => {

    const cant_projects: number = projects_data.length

    const initial_status:boolean[] = []

    for (let index: number = 0; index < cant_projects; index++) {
        initial_status.push(false)
    }
    
    const [Focus, setFocus] = useState(initial_status);

    return (
        <div className='projects_view'>
            <div className='title_container_projects'>
                <h4 className='red_border_bottom'>Proyectos</h4>
            </div>
            <div className='grid_projects_contianer'>
                {projects_data.map((data:ProjectData, i: number)=>(
                    <Project 
                        data={data} 
                        key={i}
                        state={Focus[i]}
                        onMouseEnter={() => {
                            const local_focus: boolean[] = [...initial_status]
                            local_focus[i] = true
                            setFocus(local_focus)
                        }} 
                        onMouseLeave={() => {
                            setFocus(initial_status)
                        }}/>
                ))}
            </div>
        </div>
    )
}

export default Projects