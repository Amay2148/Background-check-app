import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring';
import { toast } from 'react-toastify'
import validation from './validation';
import _ from "lodash";


const Register = () => {


        const [values, setValues] = useState({
                name: "",
                email: "",
                password: "",
                gender: "",
                age: "",
                phone: "",
                userType: "user",
        });
        const history = useHistory();
        const [errors, setErrors] = useState({});





        const handleChange = (event) => {
                setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                })

        }




        async function handleFormSubmit(event) {
                //debugger;

                let isValid = validation(values);

       if (_.size(isValid) !== 0) { setErrors(validation(values)) }



                else {
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
                        if (result.success) {
                                toast.success("Registeration user successfull")
                                history.push("/login")
                        }
                        else {



                                toast.error("Email Already Exists")


                        }


                }
        }



        return (<div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;" >

                        <div className="col-lg-8 col-sm-12 formwrapper">
                                <h1>Register</h1>

                                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Enter Name" className="form-control" />{errors.name && <p className="error">{errors.name}</p>}
                                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />{errors.email && <p className="error">{errors.email}</p>}
                                {/* <input type="text" name="gender" value={values.gender} onChange={handleChange} placeholder="Enter Gender" className="form-control" />{errors.gender && <p className="error">{errors.gender}</p>} */}



                                <select name="gender" value={values.gender} onChange={handleChange} class="form-control" id="exampleFormControlSelect1">
                                        <option  >Select Gender</option>
                                        <option onChange={handleChange}  >Male</option>
                                        <option onChange={handleChange} >Female</option>
                                        <option onChange={handleChange} >Others</option>
                                </select>



                                <input type="number" name="age" value={values.age} onChange={handleChange} placeholder="Enter Age" className="form-control" min="1" max="65" />{errors.age && <p className="error">{errors.age}</p>}
                                <input type="number" name="phone" value={values.phone} onChange={handleChange} placeholder="Enter Phone" className="form-control" min="1" />{errors.phone && <p className="error">{errors.phone}</p>}
                                <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.password && <p className="error">{errors.password}</p>}

                                <button className="btn btn-primary mb-3" onClick={handleFormSubmit} >Register</button>
                                <p className="md7" ><Link to={'/login'}>Have a Account? Login</Link></p>
                        </div>
                </div>
        </div>
        )
}


export default Register

