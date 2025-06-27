import GitHubIcon from '@mui/icons-material/GitHub';
import type { ProjectData } from '../../../interfaces/types';
import './Project.css';

type Props = { data: ProjectData, state:boolean, onMouseEnter?: () => void, onMouseLeave?: () => void }

const Project = (props: Props) => {
  console.log(props.state);
  
  return (
    <div className={props.state ? "project_container main_project_container" : "project_container"} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      <div className='header_projects'>
        <h4 className='red_border_bottom'>{props.data.title}</h4>
        <span>{props.data.sub_title}</span>
      </div>

      <div className='github_triangle'></div>

      <a href={props.data.link} className='github_link' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon className='github_icon' />
      </a>

      <p>{props.data.description}</p>
    </div>
  )
}

export default Project;
