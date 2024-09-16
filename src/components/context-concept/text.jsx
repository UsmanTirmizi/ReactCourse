import { useContext } from "react";
import { GlobalContext } from "../context";


function ContextTextComponent(){

    const getStateFromGlobalContext=useContext(GlobalContext);

    const {theme}=getStateFromGlobalContext;
    console.log(theme)
    return <h1 style={{fontSize:theme==='light' ? '50px': '100px', 
        backgroundColor: theme === 'light'? 'white': 'black', 
        color: theme=== 'light'? 'blue': 'yellow'}}>
            Change text</h1>
}

export default ContextTextComponent;