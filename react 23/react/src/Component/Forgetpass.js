import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { toast } from 'react-toastify'

const Forgetpass = () => {
    const [email, setEmail] = useState(""),
        [msg, updateMsg] = useState("");
    const [error, setError] = useState({ isValid: true, msg: "" });
    const history = useHistory();





    async function link() {

        let item = { email };

        if (email === '') {

            toast.error("Empty Email id ")
            return
        }

        let result = await fetch("http://localhost:8000/forgotpassword", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*",
            },
            body: qs.stringify(item)
        })

        let response = await result.json();


        if (result.status === 200) {
            
            
            toast.success("Password reset link sent to your email account")
            history.push("/login")
        
        }
        else {
            
            toast.error("User Invalid");
        }
    }

    return (
        <div className="container pt-5">
            <NotificationContainer />
            <div className="row myrow d-flex justify-content-center align-items-center;">
                <div className="col-lg-8 col-sm-12 formwrapper" >
                    <h1 className="pt-3 pb-3 text-center">Forget Password</h1>
                    <input type="text" placeholder
                        ="enter email" onChange={(e) => setEmail(e.target.value)} className="form-control" /> 
                    <span>{!error.isValid ? error.message : ""}</span>

                    <button className="btn btn-primary mb-3" onClick={link}>Send Link to Email</button>
                    <p className="md7" ><Link to={'/login'}>Back to Login</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Forgetpass