import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,

    Link, useHistory, useParams
} from "react-router-dom";
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import qs from 'querystring';


export default function UserHeader() {

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user-info"));
    const data1 = user['user']
    // console.warn(data1['token'])
    console.warn(data1['id'])
    const brearer = data1['token']
    const id = data1['id']

    // console.warn(brearer)
    Cookies.remove('name')



    const logout = async () => {

        let result = await fetch('http://localhost:8000/logout', {
            headers: {
                'Authorization': `Bearer ${brearer}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*",
            }

        });
        Cookies.remove("user-info")
        sessionStorage.removeItem('user_sid');
        localStorage.clear();
        toast.success("Logout Successfully ")
        history.push("/")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">User DashBoard</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">

                    <Nav.Link><Link to={{ pathname: `/profile/${id}` }} className="userheader">Profile</Link></Nav.Link>
                    <Nav.Link><Link to={{ pathname: `/resetpassword/${id}` }} className="userheader">Rest Password</Link></Nav.Link>
                    <Nav.Link><Link to={{ pathname: `/single/${id}` }} className="userheader">Update</Link></Nav.Link>
                    <Nav.Link><span onClick={logout} className="userheader">LogOut</span></Nav.Link>
                </Nav>
                <Nav>
                </Nav>
            </Navbar>

        </div>
    )

}