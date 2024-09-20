import { useState } from "react";
import { loginFormElement, registerFormElement } from "../../config";
import CommonForm from "../common-form";

const initialFormData={
       name:'',
        email:'',
        password:''
}
function RegisterComponent() {
    const [registerFormData,setRegisterFormData]=useState(initialFormData);

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(registerFormData, "log");

        ///api login here

        //then reset the initial state
        setRegisterFormData(initialFormData)
    }
    return(
        <div>
            <h1>Login Component</h1>
            <CommonForm formData={registerFormData} onHandleSubmit={onHandleSubmit} buttonText={'Register'} setFormData={setRegisterFormData} formControls={registerFormElement}/>
        </div>
    )
} 
export default RegisterComponent;