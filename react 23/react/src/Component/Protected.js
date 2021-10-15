import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const Login=(props)=> {
    let Cmp= props.Cmp
 const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/")
        }
    }, [])

    
        return (
            <div>
                 <Cmp />   
            </div>
        )
    }


export default Login;