import ProductItem from "./components/product-item";
import "./style.css";

function ProductList(props){
    console.log(props)
    const {name,city,dummyProductData}=props;

    const flag=false;
    return(
        <div>
        <h3 className="title">ECommerce Project</h3>
        {/* <ProductItem/> */}

        {
            flag ?(  <h4>Name is {name} And the city is {city}</h4>)
            : (<h4>Hello World</h4>)
        }
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