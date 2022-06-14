import React from 'react'
import circus  from '../../../assets/img/circus.PNG';
import sia  from '../../../assets/img/sia.PNG';
import sway  from '../../../assets/img/sway.PNG';
import tierra  from '../../../assets/img/tierra.PNG';
import { Popular } from '../Popular';
import { Item } from '../Popular/Item';
import { Portada } from './Portada';
import { Section } from './Section';

export const Category = () => {
  return (
     <div>
       <Section>
            <Portada src={circus} />
            <Portada src={sia} />
            <Portada src={sway} />
            <Portada src={tierra} />
       </Section>
     <Popular />
     </div>
  )
}
