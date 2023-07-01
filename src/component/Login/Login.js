import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Login.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import pic from './qrcode_app.neuro-flash.com.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [validated, setValidated] = useState(false);


  const [passwordType, setPasswordType] = useState('password');
  const [passwordIcon, setPasswordIcon] = useState(<AiFillEye />);




  const handelToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setPasswordIcon(AiFillEyeInvisible)
    } else {
      setPasswordType('password');
      setPasswordIcon(AiFillEye)
    }
  }

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
        <div className="  d-flex align-items-center justify-content-center">

          <div className="middle">

            <div className='images text-center px-4 py-4'>
              <img className='images-padding' src={pic} width={'230px'} alt="" />
            </div>
            <div className='text-center px-4 pt-4'>
              <h5 className='fw-bolder color'>Sing in</h5>
              <p className='px-5 '>Enter your email address and password to access admin panel.</p>
            </div>
            <Form className='p-4 ' noValidate validated={validated} onSubmit={handleSubmit}>

              <div className="mb-3 ">
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation required>
                    <Form.Control
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


              <div className="mb-4">
                <Form.Group controlId="validationCustomUsername">

                  <div className="d-flex justify-content-between">
                    <div>
                      <Form.Label>Password</Form.Label>
                    </div>
                    <div>
                      <Link className='text-decoration-none color size' 
                      to="./forget"><small>Forgot your Password ?</small></Link>
                    </div>
                  </div>


                  <InputGroup hasValidation>

                    <Form.Control
                      type={passwordType}
                      placeholder="Enter your Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text className='icon' onClick={handelToggle} id="inputGroupPrepend">{passwordIcon}</InputGroup.Text>
                    <Form.Control.Feedback className='size' type="invalid">
                      Please enter Password
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>
              <div className='text-center mb-5 '>
                <Button className='main ' type="submit">Login</Button>
              </div>
            </Form>
          </div>


        </div>
        <p className='text-center mt-4' >Don't have an account? <span><Link className='text-decoration-none color fw-bolder' to="">Sign Up</Link></span></p>

      </div>

      <p className='sujon'>2010 - 2022 © Sujon- sujon.one</p>
    </div>

  );
};

export default Login;