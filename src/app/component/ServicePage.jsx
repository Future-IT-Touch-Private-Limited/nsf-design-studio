import React from 'react'
import CommonBanner from './CommonBanner'
import OurServices from './Service'
import Chooseus from './Chooseus'
import OurSkiils from './OurSkiils'

export default function ServicePage() {
  return (
    <div>
          <CommonBanner name="Services" />
           <OurServices />
           <Chooseus/>
           <OurSkiils/>
    </div>
  )
}
