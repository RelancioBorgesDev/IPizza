import Image from 'next/image'
import React from 'react'
import { CardContainer, CardImage, CardInfo } from './style'
import pizzaCardapio from '/public/pizzaCardapio.png'
export default function CardCardapio() {
  return (
    <CardContainer>
        <CardImage src={pizzaCardapio} alt=""/>
        <CardInfo>
            <span>Pizza de Frango</span>
            <p>A famosa pizza tradicional de frango temperado com um molho especial, contém 8 pedaços.</p>
            <h3>R$ 36.99</h3>
        </CardInfo>
    </CardContainer>
  )
}
