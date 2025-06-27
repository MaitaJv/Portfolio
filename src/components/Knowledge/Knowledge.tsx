import React, { useState } from 'react'
import Card from './Card/Card'
import './Knowledge.css'

const Knowledge = () => {
  const on_focus: boolean = true
  const non_focus: boolean = false

  const default_focus : boolean[] = [non_focus, on_focus, non_focus]

  const first_focused : boolean[] = [on_focus, non_focus, non_focus]
  const third_focused : boolean[] = [non_focus, non_focus, on_focus]
  
  const [Status, setStatus] = useState(default_focus);

  return (
    <div className='knowledge_container'>
        <div className='knowledge_title_container'>
            <h3 className='red_border_bottom'>Formación Academica</h3>
        </div>
        <div className='cards_container'>
            <Card 
              academics_index={0} 
              main={Status[0]} 
              onMouseEnter={() => setStatus(first_focused)} 
              onMouseLeave={() => setStatus(default_focus)}/>

            <Card 
              academics_index={1} 
              main={Status[1]}
              onMouseEnter={() => {}} 
              onMouseLeave={() => {}}/>

            <Card 
              academics_index={2} 
              main={Status[2]}
              onMouseEnter={() => setStatus(third_focused)} 
              onMouseLeave={() => setStatus(default_focus)}/>
        </div>
    </div>
  )
}

export default Knowledge