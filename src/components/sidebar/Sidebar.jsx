import React from 'react'
import { Bar } from './Bar'
import { Music } from './mymusic'
import { Navbar } from './Navbar'
import { Perfil } from './perfil'

export const Sidebar = () => {
  return (
    <div>
        <Bar>
            <Perfil />
            <Navbar />
            <Music />
        </Bar>
    </div>
  )
}
