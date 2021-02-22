import React from 'react'

// components
import Header from './header/index'
import Body from './body/index'

// styles
import '../assets/scss/standard.scss'
import '../assets/scss/component/component.scss'

export const App = () => (
  <>
    <Header title="trew-component-starter" />
    <Body />
  </>
)

export default App
