import React from 'react'
import { Button } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
export default function Landing() {
  return (
    <div className="App-header" style={{
      backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch4-katie-17.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=616882576ddcccf8d6fad81adf6f52a1")`
    }}>
      <div className="">
        <Button variant="outline-primary" size="lg" className="login-register-btn">
          <Link to="/login">LOGIN</Link>
        </Button>{' '}
        <Button variant="outline-primary" size="lg" className="login-register-btn">
          <Link to="/Register">Register</Link>
        </Button>
      </div>
    </div>
  )
}
