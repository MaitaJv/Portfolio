import { DiLinux, DiNodejsSmall, DiReact, DiPython, DiVim, DiUbuntu } from "react-icons/di";
import { SiJavascript, SiC, SiGnubash, SiNumpy, SiSocketdotio } from "react-icons/si";
import './Icons.css'

type Props = {data: string[]}

const Icons = (props: Props) => {
  return (
    <div className="icons_container">
        {props.data.map((icono:string, index:number)=>(
            
            <div key={index}>
                {icono == "C" && <SiC className="icon"/>}
                {icono == "JS" && <SiJavascript className="icon"/>}
                {icono == "Linux" && <DiLinux className="icon"/>}
                {icono == "Nodejs" && <DiNodejsSmall className="icon"/>}
                {icono == "React" && <DiReact className="icon"/>}
                {icono == "Python" && <DiPython className="icon"/>}
                {icono == "Vim" && <DiVim className="icon"/>}
                {icono == "Ubuntu" && <DiUbuntu className="icon"/>}
                {icono == "Bash" && <SiGnubash className="icon"/>}
                {icono == "Socket.io" && <SiSocketdotio className="icon"/>}
                {icono == "Numpy" && <SiNumpy className="icon"/>}
            </div>
        ))}
    </div>
  )
}

export default Icons