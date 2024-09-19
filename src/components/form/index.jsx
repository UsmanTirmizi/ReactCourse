import { useState } from "react";


function FormComponent(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [formData,setFormData]=useState({
        name: '',
        email:'',
    })

    //Seperate functions for each Name as well as email handle, but if there are 15 inputs you are not going to make 15 diff funtions
    function handleNameChange(event){
        const {value}=event.target;
        setName(value);
        
    }
    function handleEmailChange(event){
        const {value}=event.target;
        setEmail(value);
        console.log(event)
    }
    // for that purpose we will create a single function and it will identify different inputs on the bases of "name " feild you have given in the input block

    function handleOnChange(event){
        console.log(event.target.name)
        const{name,value}=event.target;

        setFormData({
            ...formData,
            [name]:value
        })
    
    }
    console.log(formData)

    function handleSubmit(event){
        event.preventDefault();

        //call apis to store the form details

        console.log("Name stored is and Email is: " + name + email)
    }


    return(
        <div>
            <h1>Form Component</h1>
            <form onSubmit={handleSubmit}>
            <input value={formData.name} name="name" id="name" placeholder="Enter Your Name" onChange={handleOnChange}/>
            <input value={formData.email} name="email" type="email" id="email" placeholder="Enter Your Email" onChange={handleOnChange}/>
            <button type="submit">Submit</button>
            
            </form>
        
        </div>
    )
}
export default FormComponent;