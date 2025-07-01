import { useEffect, useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './MainView.css'

const MainView = () => {
  const full_title: string = "Javier Maita"
  let aux:string = ""
  const [title, setTitle] = useState<string>("")

  useEffect(()=>{
    let index: number = 0
    const interval = setInterval(() => {
      console.log("index: ", index);
      aux = aux + full_title[index]
      setTitle(aux)
      index++
      if (index === (full_title.length)) clearInterval(interval)
    }, 150);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='main_view'>
      <div className='titles_container_main'>
        <h1>{title}</h1>
        <h2>Técnico electronico | Estudiante de Ingenieria en Sistemas | Front End Developer</h2>
      </div>
      <div className='scroll_down_main' >
        <a href="#"><KeyboardDoubleArrowDownIcon sx={{ fontSize: 60 }}/></a>
      </div>
    </div>
  )
}

export default MainView