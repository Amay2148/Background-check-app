import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserHeader from './UserHeader'
import qs from 'querystring';
import { toast } from 'react-toastify'

import { useHistory } from 'react-router-dom'

export default function Changepass() {

    const [data, setData] = useState([]),
        [msg, updateMsg] = useState(""),
        params = useParams();

    useEffect(async () => {
        let response = await fetch("http://localhost:8000/" + params.id),
            { result } = await response.json();
        setData(result)
    }, [])

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user-info"));
    const data1 = user['user']
    // console.warn(data1['token'])
    console.warn(data1['id'])
    const brearer = data1['token']
    const id = data1['id']

    async function passUser() {
        let item = { password1, password2 }
        console.warn(item)

        let result = await fetch(`http://localhost:8000/reset-password/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*"
            },
            body: qs.stringify(item)
        });
        result = await result.json();
        toast.success("Password Reset Successfully ")
        history.push("/userheader")
    }


    return (
        <div>
            <UserHeader />
            <div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;">
                    <div className="col-lg-8 col-sm-12 formwrapper" >
                        <h1 className="pt-3 pb-3 text-center">Reset Password</h1>

                        <input type="text" placeholder="New password" value={password1} onChange={(e) => setPassword1(e.target.value)}
                            className="form-control" />
                        <input type="text" placeholder="Confirmed New password" value={password2} onChange={(e) => setPassword2(e.target.value)}
                            className="form-control" /> 

                        <button className="btn btn-primary mb-3" onClick={passUser}>Reset Password</button>

                    </div>
                </div>
            </div>
        </div>
    )


}
