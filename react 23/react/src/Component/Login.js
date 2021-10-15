import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import validateInfo from './validateInfo';
import _ from "lodash";

export default function Login() {

    const [values, setValues] = useState({

        email: "",
        password: "",

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
        debugger;

        let isValid = validateInfo(values);




       
        if (_.size(isValid) !== 0) { setErrors(validateInfo(values)) }



        else {
            let item = values
            console.warn(item)

            let result = await fetch("http://localhost:8000/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept": "*/*"
                },
                body: qs.stringify(item)
            });
            let response = await result.json();
            const data = response['user'];



            if (result.status === 200 && response.success) {
                if (data['userType'] === "user") {
                    localStorage.setItem("user-info", JSON.stringify(response))
                    Cookies.set("user-info", JSON.stringify(response))
                    toast.success("Login Successfully")
                    history.push("/userheader")
                }
                else if (data['userType'] === "admin") {
                    localStorage.setItem("user-info", JSON.stringify(response))
                    Cookies.set("user-info", JSON.stringify(response))
                    toast.success("Login Successfully")
                    history.push("/list")
                }
                else {
                    toast.error("Incorrect email and password");
                }
            }

            else if (response.email) {
                toast.error("Incorrect email ");
            }
            else if (response.password) {
                toast.error("Incorrect password "); 

            }



            else {

                toast.error("Incorrect email and password");
            }


        }



    }














return (



    <div className="container pt-5">

        <div className="row myrow d-flex justify-content-center align-items-center;">
            <div className="col-lg-8 col-sm-12 formwrapper" >
                <h1 className="pt-3 pb-3 text-center">Login</h1>

                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />{errors.email && <p className="error">{errors.email}</p>}
                <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.password && <p className="error">{errors.password}</p>}

                <button className="btn btn-primary" onClick={handleFormSubmit}>Login</button>
                <p className="md54" ><Link to={'/register'}>Register Now </Link></p>

                <p className="md7" ><Link to={'/forgetpassword'}>Forget Password ?</Link></p>


            </div>
        </div>

    </div>














)
}




