import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring';
import { toast } from 'react-toastify'
import validator from 'validator'


import validation from './validation';
const Register = () => {

        // const [name, setName] = useState("");
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        // const [userType, setUsertype] = useState("user");
        // const [gender, setGender] = useState("");
        // const [age, setAge] = useState("");
        // const [phone, setPhone] = useState("");
        const [values, setValues] = useState({
                name: "",
                email: "",
                password: "",
                gender: "",
                age: "",
                phone: "",
                userType:"user",
        });
         const history = useHistory();
        const [errors, setErrors] = useState({});
        




        const handleChange = (event) => {
                setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                })
        }



        async function handleFormSubmit (event) {
               debugger;
                setErrors(validation(values));


                let item = values
                        console.warn(item)
        
                        let result = await fetch("http://localhost:8000/user/Register", {
                                method: 'POST',
                                headers: {
                                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                                        "Accept": "*/*"
                                },
                                body: qs.stringify(item)
                        });
                        result = await result.json();
                        if (result.status === 200 ) 
                        {

                                toast.success("Registeration user successfull")
                                   history.push("/login")

                        }

        };



        // useEffect(() => {

        //         if (Object.keys(errors).length === 0 && dataIsCorrect ) {
        //                 submitForm(true);
        //         }
        // }, [errors])
       



        // async function signUp() {
        //         let item = { name, password, email, userType, gender, age, phone }
        //         console.warn(item)

        //         let result = await fetch("http://localhost:8000/user/Register", {
        //                 method: 'POST',
        //                 headers: {
        //                         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        //                         "Accept": "*/*"
        //                 },
        //                 body: qs.stringify(item)
        //         });
        //         result = await result.json();
        //         // if (validator.isEmail(email)) {
        //         //         toast.error("Email Already Exists") 
        //         // }


        //          if (email === '' || password === '' || gender === '' || name === '' || age === '' || phone === '') {

        //                 toast.error("Please fill all the field")
        //         }


        //         else if (result.status === 500 ) { toast.error("Email already exits")}

        //         else {
        //                 toast.success("Registeration user successfull")
        //                 history.push("/login")
        //         }

        // }

        return (<div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;" >

                        <div className="col-lg-8 col-sm-12 formwrapper">
                                <h1>Register</h1>

                                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Enter Name" className="form-control" />{errors.name && <p className="error">{errors.name}</p>}
                                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />{errors.email && <p className="error">{errors.email}</p>}
                                <input type="text" name="gender" value={values.gender} onChange={handleChange} placeholder="Enter Gender" className="form-control" />{errors.gender && <p className="error">{errors.gender}</p>}
                                <input type="text" name="age" value={values.age} onChange={handleChange} placeholder="Enter Age" className="form-control" />{errors.age && <p className="error">{errors.age}</p>}
                                <input type="text" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter Phone" className="form-control" />{errors.phone && <p className="error">{errors.phone}</p>}
                                <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.password && <p className="error">{errors.password}</p>}
                                {/* <input type="hidden" value={userType} onChange={(e) => setUsertype(e.target.value)} placeholder="Enter UserType" className="form-control" /><br /> */}
                                <button className="btn btn-primary mb-3" onClick={handleFormSubmit} >Register</button>
                                <p className="md7" ><Link to={'/login'}>Have a Account? Login</Link></p>
                        </div>
                </div>
        </div>
        )
}


export default Register