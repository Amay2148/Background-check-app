import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'querystring';

import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify'


import { useHistory } from 'react-router-dom'

export default function Changepass() {




    const location = useLocation()
    const paths = location.pathname.split('/')

    const token = paths[2]
    console.warn(token);
    var decoded = jwt_decode(token);
    var id = decoded.id



    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    
    const [error, setError] = useState({ isValid: true, msg: "" });


    const history = useHistory();

    async function changeUser() {
        let item = { password, password2 }
        console.warn(item)


        let result = await fetch(`http://localhost:8000/change-password/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*"
            },
            body: qs.stringify(item)
        });
        let response = await result.json();


        if (result.status === 200) {
            
            toast.success("Password Change Successfully ")
            history.push("/login")
            
        }
        else {
            //setError({ isValid: false, message: response.message })
            toast.error("Incorrect email and password");
        }
    }



    return (
        <div className="container pt-5">
            
            <div className="row myrow d-flex justify-content-center align-items-center;">
                <div className="col-lg-8 col-sm-12 formwrapper" >
                    <h1 className="pt-3 pb-3 text-center">Change Password</h1>
                    <input type="text" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)}
                        className="form-control" />
                    <input type="text" placeholder="Confirmed New password" value={password2} onChange={(e) => setPassword2(e.target.value)}
                        className="form-control" />


                    <button className="btn btn-primary mb-3" onClick={changeUser}>Change Password</button>

                </div>
            </div>
        </div>
    )


}
