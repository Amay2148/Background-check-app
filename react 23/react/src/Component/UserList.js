import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import qs from "querystring";
import Header from "./Header";
import { toast } from 'react-toastify'

export default function UserList() {

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user-info"));


    const data1 = user['user']
    const brearer = data1['token']


    const [data, setData] = useState([]),
        [msg, updateMsg] = useState("");
    useEffect(async () => {
        let result = await fetch('http://localhost:8000/list', {
            headers: {
                'Authorization': `Bearer ${brearer}`,
            },
        });
        result = await result.json();
        setData(result)

    }, [])

    let onEdit = (id) => {
        let path = `update/${id}`;
        history.push(path);
    }


    let onDelete = async (id) => {
        // state, before delete anything
        const currentData = data,
            // Remove deleted item from state.
            updatedData = data.userData.filter(val => val._id !== id);
        setData({ userData: updatedData });
        let result = await fetch(`http://localhost:8000/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*",
            },
            body: qs.stringify(data)
        });
        let response = await result.json();
        if (result.status === 200) {
       toast.error("User Deleted Successfully ")
        } else {
            setData({ userData: currentData });
            updateMsg(response.error)
        }
    }


    return (
        <div>
            <Header />
            <h1>User List</h1>
            <span>{msg}</span><br /><br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                        <td>UserType</td>
                        <td>Phone</td>
                        <td>Edit</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.userData && data.userData.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.userType}</td>
                                <td>{item.phone}</td>
                                <td><span onClick={() => onEdit(item._id)} className="edit">Edit</span></td>
                                <td><span className="delete" onClick={() => onDelete(item._id)}>Delete</span></td>
                                
                            </tr>

                        ))
                    }

                </tbody>
            </Table>


        </div>
    )
}
