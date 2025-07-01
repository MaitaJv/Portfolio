import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact_container'>
        <div className='contact_title_container'>
            <h4 className='red_border_bottom'>Contactame</h4>
        </div>
        <form action="" className='contact_form_container'>
            <label className='labels'>Nombre</label>
            <input type="text" placeholder='Tu nombre!' className='inputs white_text'/>
            
            <label className='labels'>Carta</label>
            <textarea name="Carta" placeholder='Tu mensaje!' className='text_area white_text'></textarea>

            <button type="submit" className='form_btn'>Enviar</button>
        </form>
        <div className='spans_container'>
            <div className='span_data_container'>
                <EmailIcon/>
                <span>javiermaita@hotmail.com.ar</span>
            </div>
            <div className='span_data_container'>
                <LocalPhoneIcon/>
                <span>+54 11 6519-1629</span>
            </div>
        </div>
    </div>
  )
}

export default Contact