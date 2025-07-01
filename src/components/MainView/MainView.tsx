import { useEffect, useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './MainView.css'

const MainView = () => {
  const full_title: string = "Javier Maita"
  const [title, setTitle] = useState<string>("")

  const subtitles: string[] = ["Técnico electronico", "Estudiante de Ingenieria en Sistemas", "Front End Developer"]
  const [subtitle, setSubtitle] = useState("")

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  //Efecto del titulo
  useEffect(()=>{
    let index: number = 0
    let aux:string = ""

    const interval = setInterval(() => {

      aux = aux + full_title[index]
      setTitle(aux)
      index++
      if (index === (full_title.length)) clearInterval(interval)

    }, 200);

    return () => clearInterval(interval);
  }, [])

  //Efecto del subtitulo
  useEffect(() => {
    let aux: string = ""
    let subtitle_index: number = 0
    let writing: boolean = true

    const write_subtitles = async () => {

      while (true) {
        //Escribimos el subtitulo
        if (writing){
          for (let i:number = 0; i < subtitles[subtitle_index].length; i++) {
            aux = aux + subtitles[subtitle_index][i]
            setSubtitle(aux)
            await sleep(100)
            if (i == subtitles[subtitle_index].length - 1){
              writing = false
              await sleep(2000)
            }
          }
        }

        //Borramos subtitulo
        if (!writing){
          for (let i:number = subtitles[subtitle_index].length; i >= 0; i--) {
            aux = aux.slice(0, i)
            setSubtitle(aux)
            await sleep(100)
            if (i == 0) {
              writing = true
              subtitle_index++
            }
          }
        }

        if(subtitle_index == subtitles.length) subtitle_index = 0
      }
    }

    write_subtitles()
  
    return () => {}
  }, [])
  

  return (
    <div className='main_view'>
      <div className='titles_container_main'>
        <h1 className='typing_h1'>{title}</h1>
        <h2 className='typing_h1'>{subtitle}</h2>
      </div>
      <div className='scroll_down_main' >
        <a href="#"><KeyboardDoubleArrowDownIcon sx={{ fontSize: 60 }}/></a>
      </div>

      <div className='wave wave1'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div>
    </div>
  )
}

export default MainView