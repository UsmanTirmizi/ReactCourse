import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponenet from './components/functional-component'
import ProductList from './components/products'

function App() {
  const [count, setCount] = useState(0)
  const dummyProductData=["Product 1","Product 2","Product 3"]

  return (

      <div>
        <h1>React Js Concept</h1>
        {/* <ClassBasedComponent/>
        <FunctionalComponenet/> */}
        <ProductList name="Usman" city="Khi" dummyProductData={dummyProductData}/>
      </div>
     
  )
}

export default App
