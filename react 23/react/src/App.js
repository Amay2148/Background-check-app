import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import UserList from './Component/UserList';
import UserCreate from './Component/UserCreate';
import UserDetail from './Component/UserDetail';
import UserSearch from './Component/UserSearch';
import UserUpdate from './Component/UserUpdate';
import Protected from './Component/Protected';
import Home from './Component/Home';
import Register from './Component/Register';
import Landing from './Component/Landing';
import Login from './Component/Login';
import UserHeader from './Component/UserHeader';
import Profile from './Component/Profile';
import Forgetpass from './Component/Forgetpass';
import Changepass  from  './Component/Changepass';
import Resetpass  from  './Component/Resetpass';
import SingleU from './Component/SingleU';

export default function App() {
  


  return (
    <Router>
      <Switch>
        <Route path="/list">
          <Protected Cmp={UserList} />
        </Route>
        <Route path="/update/:id">
          <UserUpdate />
        </Route>
        <Route path="/create">
          <Protected Cmp={UserCreate} />
        </Route>
        <Route path="/detail">
          <Protected Cmp={UserDetail} />
        </Route>
        <Route path="/search">
          <Protected Cmp={UserSearch} />
        </Route>
        <Route path="/home">
          <Protected Cmp={Home} />
        </Route>
      {/* <Route exact path="/changepassword/:id">:slug" component={Split} */}
      <Route exact path="/changepassword/:id">
        <Changepass/>
        </Route>
        <Route exact path="/resetpassword/:id">
        <Protected Cmp={Resetpass} />
        </Route>
        <Route exact path="/">
          <Landing />
         </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgetpassword">
          <Forgetpass />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/:id">
        < Protected Cmp={Profile} />
        </Route>
        <Route path="/single/:id">
        < Protected Cmp={SingleU} />
        </Route>
        <Route path="/userheader">
        <UserHeader/>
     </Route>
      </Switch>
      <ToastContainer autoClose={2000}  />
    </Router>
  )
}
