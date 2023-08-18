import React from 'react'
import { Header, Content, Footer} from './func-components'
import Calender from './class-components'
import Banner from './banner'
import {Calculator2} from './calculator'

function app() {
  return (
    <>
     <Header/>
     <p><center><Calender/></center></p>
     <Content/>
     <Calculator2/>
     <Banner/>
     <Footer/>
    </>
  )
}
export default app