import React from 'react'
import Navbar from './Navbar'
import imgVitalineaBebible from '../assets/img-vitalinea-bebible.png'
import '../scss/abstracts/home.scss'
import img100kcal from '../assets/img-100-kcal.png'
import imgSelloAvalado from '../assets/img-sello-avalado.png'
import Details from './Details'
import Products from './Products'
import Footer from './FooterVitalinea'
import arrow from '../assets/btn.svg'

export default function Home() {

  return (
    <div>
        <Navbar/>
    <div className='detail-product'>
        <img alt='vitalinea-bebible' src={imgVitalineaBebible} className="img-vitalinea" />
        <section className='content-section'>
            <div className='sabores'>
            <p>Sabor:</p>
            <button className='btn-sabor'>Fresa</button>
            <button className='btn-sabor'>Gyuayaba</button>
            <button className='btn-sabor'>Toronja</button>
            </div>
            <h3>Vitalínea® Bebible Fresa 217 gr.</h3>
            <p>¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.</p>
            <div className='walmart'>
            <button className='btn-walmart'>Comprar en Walmart</button>
                <div>
                <img alt='img-100kcal' src={img100kcal} className="img-sellos"/>
                <img alt='img-sello-avalado' src={imgSelloAvalado} className="img-sellos"/>
                </div>
            </div>
        </section>
    </div>
                <img alt='vitalinea-arrow' src={arrow} className="img-arrow"/>
    <Details/>
    <Products/>
    <Footer/>
    </div>
  )
}
