import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './MainView.css'

const MainView = () => {
  return (
    <div className='main_view'>
      <div className='titles_container_main'>
        <h1>Javier Maita</h1>
        <h2>Técnico electronico | Estudiante de Ingenieria en Sistemas | Front End Developer</h2>
      </div>
      <div className='scroll_down_main' >
        <a href="#"><KeyboardDoubleArrowDownIcon sx={{ fontSize: 60 }}/></a>
      </div>
    </div>
  )
}

export default MainView