import React from 'react'
import '../scss/abstracts/home.scss'



export default function Details() {

    const info = {
        "product": "Vitalínea® Bebible Guayaba 217gr",
         "gr": "Valor promedio por porción de 217gr",
         "porciones": "Porciones por envase: 1",
         "content": "Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.",

     }
     const infoDetail = {
          "ContenidoEnergetico": "413.2/97.9",
          "proteinas": "5.3",
          "grasasLipidos": "2.1",
          "grasasSaturadas": "1.4",
          "carbohidratos": "12.4",
          "azucares": "7.7",
          "azucaresAñadidos": "0.1",
          "fibra": "0.0",
          "sodio": "92.7",
          "calcio": "199.6",
          "vnr": "22"
      }


  return (
    <div>
        <h3 className='info-nut'>Informacion nutrimental</h3>
        <div className='detail-product'>
            <div className='info-general'>
        <li>
            <ul>
                <p className='info-product'>{info.product}</p>
                <p className='info-product'>{info.gr}</p>
                <p className='info-product'>{info.porciones}</p>
            </ul>
        </li>
        <p className='content'><strong>Ingredientes:</strong> {info.content} </p>
        </div>
                <table className='table-nut'>
        <tr>
            <td>Contenido Energético kj/kcal</td>
            <td>{infoDetail.ContenidoEnergetico}</td>
        </tr>
        <tr>
            <td>Proteínas (g)</td>
            <td>{infoDetail.proteinas}</td>
        </tr>
        <tr>
            <td>Grasas (lípidos) (g)</td>
            <td>{infoDetail.grasasLipidos}</td>
        </tr>
        <tr>
            <td>Grasas saturadas (g)</td>
            <td>{infoDetail.grasasSaturadas}</td>
        </tr>
        <tr>
            <td>Carbohidratos (Hidratos de carbono) (g)</td>
            <td>{infoDetail.carbohidratos}</td>
        </tr>
        <tr>
            <td>Azucares (g)</td>
            <td>{infoDetail.azucares}</td>
        </tr>
        <tr>
            <td>Azucares añadidos (g)</td>
            <td>{infoDetail.azucaresAñadidos}</td>
        </tr>
        <tr>
            <td>Fibra dietetica (g)</td>
            <td>{infoDetail.fibra}</td>
        </tr>
        <tr>
            <td>Sodio (mg)</td>
            <td>{infoDetail.sodio}</td>
        </tr>
        <tr>
            <td>Calcio (mg)</td>
            <td>{infoDetail.calcio}</td>
        </tr>
        <tr>
            <td>%VNR*</td>
            <td>{infoDetail.vnr}</td>
        </tr>
   
        </table>
                    
                
        </div>
    </div>
  )
}
