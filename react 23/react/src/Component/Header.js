import React, { useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {
  Link, useHistory
} from "react-router-dom";
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export default function Header() {

  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user-info"));


  const data = user['user']

  console.warn(data['token'])
  const brearer = data['token']
  console.warn(brearer)
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
        <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          <Nav.Link><Link to="/list" className="userheader">List</Link></Nav.Link>
          <Nav.Link><Link to="/create" className="userheader">Create</Link></Nav.Link>
          {/* <Nav.Link><Link to="/search">Search</Link></Nav.Link>
          <Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>
          <Nav.Link> <Link to="/home">Home</Link></Nav.Link> */}
          <Nav.Link><span onClick={logout} className="userheader">LogOut</span></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )

}