import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../Login.css';
import pic from '../qrcode_app.neuro-flash.com.png'
import { Link } from 'react-router-dom';


const Forget = () => {
  const [validated, setValidated] = useState(false);








  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      alert('User Not found')
    }

    setValidated(true);
  };

  return (
    <div className='color'>
      <div className='wrapper'>
        <div className="h-100vh  d-flex align-items-center justify-content-center">

          <div className="middle">

            <div className='images text-center px-4 py-4'>
              <img className='images-padding' src={pic} width={'230px'} alt="" />
            </div>
            <div className='text-center px-4 pt-4'>
              <h5 className='fw-border color'>Forget Password</h5>
              <p className='px-5 color'>Enter your email address and password to access admin panel.</p>
            </div>
            <Form className='p-4 ' noValidate validated={validated} onSubmit={handleSubmit}>

              <div className="mb-4  color">
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation required>
                    <Form.Control className='color'
                      type="email"
                      placeholder="Enter your Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback className='size' type="invalid">
                      Please enter Email
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>




              <div className='text-center mb-4'>
                <Button className='main' type="submit">Login</Button>
              </div>
            </Form>
          </div>


        </div>
        <p className='text-center mt-4 color' >Don't have an account? <span className="fw-bolder"><a className='text-decoration-none' href='./'>Sign Up</a></span></p>

      </div>

      <p className='sujon color'>2010 - 2022 © Sujon- sujon.one</p>
    </div>

  );
};

export default Forget;