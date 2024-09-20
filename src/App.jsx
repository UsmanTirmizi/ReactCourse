import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponenet from './components/functional-component'
import ProductList from './components/products'
import Users from './components/users'
import ContextButtonComponent from './components/context-concept/button'
import ContextTextComponent from './components/context-concept/text'
import UseReducerExample from './components/use.reducer-example'
import FormComponent from './components/form'
import LoginComponent from './components/login'
import RegisterComponent from './components/register'

function App() {
  const [count, setCount] = useState(0)
  const dummyProductData=["Product 1","Product 2","Product 3"]

  return (

      <div>
        <h1>React Js Concept</h1>
        {/* <ClassBasedComponent/> */}
        {/* <FunctionalComponenet/> */}
        {/* <ProductList name="Usman" city="Khi" dummyProductData={dummyProductData}/> */}
        {/* <Users/> */}
        {/* <ContextButtonComponent/>
        <ContextTextComponent/> */}
        {/* <UseReducerExample/> */}
        {/* <FormComponent/> */}
          <div style={{display:'flex', gap:'20px'}}>
            <LoginComponent/>
            <RegisterComponent/>
          </div>
      </div>
     
  )
}

export default App
