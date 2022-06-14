import React from 'react'
import { Image } from './Image'
import Foto  from '../../../assets/img/photo.jpeg';

export const Perfil = () => {
  return (
    <div>
      <section className='perfil'>
        <Image src={Foto} alt='Foto-personal' />
        <h3>Name</h3>
        <p>leho.patino@gmail.com</p>
      </section>
    </div>
  )
}
