import React, { useState } from "react"



export const Login = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        let regex=/^[^\s@]+@[^\s@]+\.[^\s@]$/i;
   
        if(!values.email){
            errors.email="email is required";
        }
        else if(!regex.test(values.email)){
            errors.email="please enter a valid email";
        }
        if(!values.password){
            errors.password="password is required";
        }
        else if(values.password.length<4){
            errors.password="password must be more than 4 charecters";
        }
        else if(values.password.length>10){
            errors.password="password cant exceed 10 charecters";
        }
    }
    return (
        <div className="auth-form-container">
            {/* {Object.keys(formErrors).length==0 && isSubmit ?(<div className="success" style={{color:"green"}}></div>):} */}
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input type="email" id="email" value={formValues.email} onChange={handleChange}/><br />
                {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
                <label htmlFor="password">password:</label>
                <input type="password" id="password" value={formValues.password} onChange={handleChange}/><br />
                {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
                <input type="submit" value="submit"/>
            </form>
            <button>Don't you have an account?</button>
           
            </div>
            )
}