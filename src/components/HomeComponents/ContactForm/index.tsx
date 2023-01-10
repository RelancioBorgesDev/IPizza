import React from 'react'
import { ContatoForm } from './style'

export default function ContactForm() {
  return (
    <ContatoForm>
          <input type='text' placeholder='Digite seu nome*' className='nome' />

          <input
            type='text'
            placeholder='Digite seu sobrenome*'
            className='sobrenome'
          />

          <input
            type='email'
            placeholder='Digite seu email*'
            className='email'
          />

          <input
            type='text'
            placeholder='Digite seu telefone'
            className='telefone'
          />

          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Digite sua mensagem*'
            className='mensagem'
          ></textarea>

          <button type='submit'>Enviar</button>
        </ContatoForm>
  )
}
