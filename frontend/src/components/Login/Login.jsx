import React, { useState } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <Form>
      <div className='login-title'>
        <h2>{currState}</h2>
        <CloseButton onClick={() => setShowLogin(false)} />
      </div>

      <div className='login-input'>
        {currState === "Login" ? <></> :
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
        }
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail </Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {currState === "SignUp" ? "Create an Account" : "Login"}
        </Button>
        <Form.Check type={'checkbox'}
          label="I agree to the terms and conditions." />
      </div>
    </Form>
  );
}

export default Login