import { Icons } from '../../index'
import type { ProjectData } from '../../../interfaces/types';
import './Project.css';
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = { data: ProjectData, state:boolean, onMouseEnter?: () => void, onMouseLeave?: () => void }

const Project = (props: Props) => {
  
  return (
    <div className={props.state ? "project_container main_project_container" : "project_container"} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      <div className='header_projects'>
        <h4 className='red_border_bottom'>{props.data.title}</h4>
        <span>{props.data.sub_title}</span>
      </div>

      <Icons data={props.data.icons}/>

      <div className='github_triangle'></div>

      <a href={props.data.link} className='github_link' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon className='github_icon' />
      </a>
    </div>
  )
}

export default Project;
