import React from 'react'
import logoFooter from '../assets/img-logo-footer.png'
import logoDanone from '../assets/img-logo-danone.png'
import '../scss/abstracts/home.scss'

export default function FooterVitalinea() {
  return (
    <footer>
        <div className='footer-vitalinea'>
            <img alt='logo-danone' src={logoDanone} />
            <img alt='logo-vitalinea' src={logoFooter} />
        </div>
        <p >Términos y condiciones| Políticas de privacidad | Aviso de privacidad</p>
        <h5 >Danone de México 2017 ©. Todos los derechos reservados 2017</h5>
    </footer>
  )
}
