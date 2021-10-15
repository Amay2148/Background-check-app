import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import qs from 'querystring';
import { useHistory } from 'react-router-dom'
import UserHeader from './UserHeader'
import { Table } from 'react-bootstrap';


export default function Profile() {

    const [data, setData] = useState([]),
        [msg, updateMsg] = useState(""),
        params = useParams();
    const history = useHistory();
    useEffect(async () => {
        let response = await fetch("http://localhost:8000/" + params.id),
            { result } = await response.json();
        setData(result)
        
 }, [])


    return (
      <div class="col-lg-12">
      <UserHeader />
      <div class="card shadow-sm">
        <div class="card-header bg-transparent border-0">

          
          


          <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Profile</h3>
        </div>
        <div class="card-body pt-0">
          <table class="table table-bordered">
            <tr>
              <th width="30%">Name</th>
              <td width="2%">:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th width="30%">Email	</th>
              <td width="2%">:</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th width="30%">UserType</th>
              <td width="2%">:</td>
              <td>{data.userType}</td>
            </tr>
            <tr>
              <th width="30%">Gender</th>
              <td width="2%">:</td>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <th width="30%">Age</th>
              <td width="2%">:</td>
              <td>{data.age}</td>
            </tr>
            <tr>
              <th width="30%">Phone</th>
              <td width="2%">:</td>
              <td>{data.phone}</td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    )
}


