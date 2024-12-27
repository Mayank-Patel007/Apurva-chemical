import React from 'react'
import Carousol from '../components/Carousol'
import Video from '../components/Video'
import ServiceArea from '../components/ServiceArea'
import Newsletter from '../components/Newsletter'
import ProductsGrid from '../components/ProductsGrid'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
function HomePage() {
  return (
    <>
  
      <Carousol/>
      <Video/>
      <ServiceArea/>
      <Projects/>
      <ProductsGrid/>
      <Newsletter/>
      <Blog/>

    </>
  )
}

export default HomePage
