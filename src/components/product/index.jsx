import React from 'react'
import zapatilla from '../../assets/images/Nike_ZoomX.png'
import {content,imgBg, text} from './product.module.scss'


function Product() {
  return (
    <section className={content}>
        <figure className={imgBg}>
            <img src={zapatilla} alt="Zapatilla Nike Zoom X" />
        </figure>
        <div className={text}>
            <h2>Hombre Nike ZoomX Zapatillas. Nike ES</h2>
            <p>Cuando des un par de zancadas con las Nike Air Zoom Alphafly NEXT% 2, nunca volverás a ver tus zapatillas de competición favoritas del mismo modo. Estos cohetes se han diseñado para reducir tu tiempo personal sin sacrificar la base que necesitas para llegar más lejos. El grueso y ligero sistema de sujeción combina comodidad y velocidad en una combinación clásica del running. Disfruta del mayor retorno de energía de todas nuestras zapatillas de competición mientras te esfuerzas por alcanzar tu mejor marca y arrollar a la competencia.</p>
        </div>
    </section>
  )
}

export default Product