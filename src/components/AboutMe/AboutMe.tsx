import React from 'react'
import './AboutMe.css'
import personal_data from './../../data/personal.json'

const AboutMe = () => {
    const description: string[] = personal_data.description
    const work_shifts: string = personal_data['work shifts']
    return (
        <div className='about_me_container'>
            <div className='image_container'>

            </div>

            <div className='personal_data_container'>
                <div className='titles_container'>
                    <h4 className='red_border_bottom'>Sobre mi</h4>
                </div>
                {description.map((text) => (
                    <p className='text'>{text}</p>
                ))}
                <div className='span_container'>
                    <span className='text red_border_bottom'>Disponibilidad horaria: {work_shifts}</span>
                </div>
            </div>

            <div className='image_container'>

            </div>
        </div>
    )
}

export default AboutMe