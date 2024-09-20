import CommonInputs from "../common-inputs";

const formType={
    INPUT:'input',
    SELECT:'select',
    TEXTAREA:'textarea'
}


function CommonForm({formControls=[], formData,setFormData,onHandleSubmit,buttonText}) {

    function renderFormElement(getCurrentFormElement){
        let content=null;

        switch (getCurrentFormElement?.componentType) {
            case formType.INPUT:
                content=(<CommonInputs label={getCurrentFormElement.label}
                id={getCurrentFormElement.id}
                name={getCurrentFormElement.name}
                placeholder={getCurrentFormElement.placeholder}
                type={getCurrentFormElement.type}
                value={formData[getCurrentFormElement.name]}
                onChange={(event)=>setFormData({
                    ...formData,
                    [event.target.name]:event.target.value

                })}/>);

                break;
        
            default:
                content=(<CommonInputs label={getCurrentFormElement.label}
                id={getCurrentFormElement.id}
                name={getCurrentFormElement.name}
                placeholder={getCurrentFormElement.placeholder}
                type={getCurrentFormElement.type}
                value={formData[getCurrentFormElement.name]}
                onChange={(event)=>setFormData({
                    ...formData,
                    [event.target.name]:event.target.value

                })}/>);

                break;
        }
        return content;

    }

    return(
        <form onSubmit={onHandleSubmit}>
            {
                formControls?.length ? 
                formControls.map((singleFormElement)=>renderFormElement(singleFormElement))
                :null
            }

            <div style={{ marginTop: "12px" }}>
             <button type="submit">{buttonText || "Submit"}</button>
            </div>
        </form>
    )
}
export default CommonForm;