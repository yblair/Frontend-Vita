import React from 'react'
import '../scss/abstracts/home.scss'
import productoGriego from "../assets/img-vitalinea-griego.png"
import productoSinAzucar from "../assets/img-vitalinea-sin-azucar.png"
import productoBebible from "../assets/img-vitalinea-bebible.png"

export default function Products() {
  return (
    <div className='products'>
        <h4>LA FAMILIA VITALÍNEA</h4>

    <div className='all-products'>
      <div className='one-product'>
  <img className='img-productos' alt="a" src={productoGriego} /><p>Vitalínea Griego</p>
      </div>
      <div className='one-product'>
  <img className='img-productos' alt="a" src={productoSinAzucar}/><p>Vitalínea Sin Azúcar</p>
      </div>
       <div className='one-product'>
  <img className='img-productos' alt="a" src={productoBebible}/><p>Vitalínea Bebible</p>
    </div>
    </div>
    </div>
  )
}

