import { useRef } from 'react';
import emailjs from 'emailjs-com';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const enviarMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        'portfolio_contact',     // 👈 reemplazá esto
        'template_y3u6v9k',    // 👈 y esto
        formRef.current,
        '3rYASphxndt1TS-Y1'      // 👈 y esto
      ).then(
        (result) => {
          console.log('✅ Email enviado', result.text);
          alert('Mensaje enviado con éxito!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('❌ Error al enviar', error.text);
          alert('Error al enviar el mensaje. Intenta más tarde.');
        }
      );
    }
  };

  return (
    <div className='contact_container'>
      <div className='contact_title_container'>
        <h4 className='red_border_bottom'>Contactame</h4>
      </div>
      <form ref={formRef} onSubmit={enviarMail} className='contact_form_container'>
        <label className='labels'>Nombre</label>
        <input type="text" name="nombre" placeholder='Tu nombre!' className='inputs white_text' required />

        <label className='labels'>Carta</label>
        <textarea name="carta" placeholder='Tu mensaje!' className='text_area white_text' required></textarea>

        <button type="submit" className='form_btn'>Enviar</button>
      </form>

      <div className='spans_container'>
        <div className='span_data_container'>
          <EmailIcon />
          <span>javiermaita@hotmail.com.ar</span>
        </div>
        <div className='span_data_container'>
          <LocalPhoneIcon />
          <span>+54 11 6519-1629</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
