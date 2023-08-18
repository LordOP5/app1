import React from 'react'
import { Header, Content, Footer} from './func-components'
import Calender from './class-components'
import Banner from './banner'

function app() {
  return (
    <>
     <Header/>
     <p><center><Calender/></center></p>
     <Content/>
     <Banner/>
     <Footer/>
    </>
  )
}
export default app