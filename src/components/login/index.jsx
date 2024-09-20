import { useState } from "react";
import { loginFormElement } from "../../config";
import CommonForm from "../common-form";

const initialFormData={
       email:'',
        password:''
}

function LoginComponent() {
    const [loginFormData,setLoginFormData]=useState(initialFormData);

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(loginFormData, "log");

        ///api login here

        //then reset the initial state
        setLoginFormData(initialFormData)
    }
    return(
        <div>
            <h1>Login Component</h1>
            <CommonForm formData={loginFormData} onHandleSubmit={onHandleSubmit} buttonText={'Login'} setFormData={setLoginFormData} formControls={loginFormElement}/>
        </div>
    )
}
export default LoginComponent;