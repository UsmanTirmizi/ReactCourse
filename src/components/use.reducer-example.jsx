import { useReducer } from "react"

const initialState={
    showTextFlag:false,
    changeTextStylesFlag:false,

};
function reducer(state,action){

    switch (action.type) {
        case 'HIDE_TEXT':
            console.log(state,action)
            return {
                ...state,
                showTextFlag:false,
            }
         case 'SHOW_TEXT':
            return  {
                ...state,
                showTextFlag:true,
            };
         case 'CHANGE_TEXT_STYLE':
            return {
                ...state,
                changeTextStylesFlag:!state.changeTextStylesFlag,
            };;
    
        default:
            return state;
    }

}

export default function UseReducerExample(){

   const [state,dispatch]=useReducer(reducer,initialState)

   console.log(state); 
   
    return ( <div>
        {
            state?.showTextFlag ?  <h3 style={{backgroundColor: state?.changeTextStylesFlag? 'red':'black'}}> Use Reducer Example</h3>: null
        }
       
        <button onClick={()=> dispatch({type:'HIDE_TEXT'})}>hide text</button>
        <button onClick={()=> dispatch({type:'SHOW_TEXT'})}>show text</button>
        <button onClick={()=> dispatch({type:'CHANGE_TEXT_STYLE'})}>toggle text style</button>
    </div>
);}