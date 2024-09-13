import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

function ProductList(props){
    //console.log(props)
    const {name,city,dummyProductData}=props;

    // const flag=false;

    const [flag,setFlag]=useState(false);
    const [count,setCount]=useState(0);
    const [changeStyle,setChangeStyle]=useState(false);

    // function renderTextBlock(getFlag){
    //     return getFlag ? (  <h4>Name is {name} And the city is {city}</h4>)
    //     : (<h4>Hello World</h4>)
    // }

    const renderTextBlock =flag ?(  <h4>Name is {name} And the city is {city}</h4>)
                    : (<h4>Hello World</h4>);



    function handleToggleText(){
        setFlag(!flag);
    }

    function handleCount(){
        setCount(count+1);
    }

    useEffect(()=>{
        setFlag(!flag);
      //  console.log("run only once onpage load")
        
      return()=>{
        console.log("componenet unmounted")
    }
    },[]) 

    useEffect(()=>{
        console.log("Count changes")
        if(count===10) setChangeStyle(true)

          
    },[count])

    return(
        <div>
        <h3 className="title">ECommerce Project</h3>
        {/* <ProductItem/> */}
        <button onClick={handleToggleText}>Toggle Text</button>
        {
            // flag ?(  <h4>Name is {name} And the city is {city}</h4>)
            // : (<h4>Hello World</h4>)
            renderTextBlock
        }
        <div>
            <button onClick={handleCount} style={{backgroundColor: changeStyle? 'red' : 'blue'}}>Increase Count</button>
            <p>Count is {count}</p>
        </div>
        <ul>
            {dummyProductData.map((item,index)=>
            ( 
                // <li key={index}>
                //     {item}
                // </li>
                <ProductItem singleProduct={item} key={index}/>
            ))
            }
        </ul>
        </div>
    )
}
export default ProductList;