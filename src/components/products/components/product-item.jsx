import styles from "./product-item.module.css"
function ButtonComponent(){
    return <button className={styles.buttonStyle}>Click</button>
}

function ProductItem({singleProduct}, {key}){
    
    return(
        <div style={{padding:'20px',border:'2px solid red', marginBottom:'12px'}} key={key}>
           <p className={styles.productTitle}>{singleProduct}</p>
            <ButtonComponent/>
        </div>
    )
}


export default ProductItem;