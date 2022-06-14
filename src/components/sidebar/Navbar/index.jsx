import React from 'react'
import { Menu } from './menu'

export const Navbar = () => {
  return (
    <div>
        <section>
            <Menu>
                <a>Home</a>
                <a>Browse</a>
                <a>Album</a>
                <a>Artist</a>
                <a>Videos</a>
            </Menu>
        </section>
    </div>
  )
}
