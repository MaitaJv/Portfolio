import './Card.css'
import academics from './../../../data/academics.json'

type Props = {academics_index:number, main:boolean, onMouseEnter?: () => void, onMouseLeave?: () => void;}

const Card = ( props: Props) => {
    const data = academics[props.academics_index]
    return (
        <div className={props.main ? "card_container main_knowledge" : "card_container"}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}>
            <div className='card_text'>
                <div className='card_header'>
                    <h4 className='card_title'><span className='red_border_card_titles'>{data.name}</span></h4>
                    <span className='status red_border_card_titles'>{data.status}</span>
                </div>
                <p>{data.description}</p>
            </div>
            <div className='image_container_card'>
                <img src={data.img} alt="logo" className='image_card'/>
            </div>
        </div>
    )
}

export default Card