import React, { useState } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import styled from 'styled-components';

const CustomFormControl = styled(Form.Control)`
  &::placeholder {
    font-size: 13px; 
  }
`;
const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <Form className='login-container'>
        <div className='login-title'>
          <h2>{currState}</h2>
          <CloseButton onClick={() => setShowLogin(false)} />
        </div>

        <div className='login-input'>
          {currState === "Login" ? <></> :
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name </Form.Label>
              <CustomFormControl type="text" placeholder="Enter Name" />
            </Form.Group>
          }

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail </Form.Label>
            <CustomFormControl type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <CustomFormControl type="password" placeholder="Enter Password" />
          </Form.Group>

          <div className='d-grid'>
            <Button  style={{ backgroundColor: '#3AD136', borderColor: '#3AD136', color: 'white' }}
             type="submit" >
              {currState === "Sign Up" ? "Create an Account" : "Login"}
            </Button>
          </div>

          <Form.Check type={'checkbox'} style={{marginTop: '20px'}}
            label="I agree to the terms and conditions." />
        </div>
     
        {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> :
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }

      </Form>
    </div>

  );
}

export default Login