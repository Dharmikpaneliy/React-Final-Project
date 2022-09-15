import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';
import { googleLogin } from '../Redux/Action/auth.action';

function Login(props) {

    const [useType, setUseType] = useState("Login");
    const dispatch = useDispatch();

    let Login = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let SignUp = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let forgetPassowrd = {
        email: yup.string().email("please enter valid email").required("please enter email"),
    }

    let schema, initiValue;

    if (useType === "Login") {
        schema = yup.object().shape(Login);
        initiValue = {
            email: "",
            password: ""
        }
    } else if (useType === "SignUp") {
        schema = yup.object().shape(SignUp);
        initiValue = {
            email: "",
            password: ""
        }
    } else if (useType === "forgetPassowrd") {
        schema = yup.object().shape(forgetPassowrd);
        initiValue = {
            email: ""
        }
    }

    const formik = useFormik({
        initialValues: initiValue,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);

            if (useType === "Login") {
                console.log("Successfully Login");
                // sessionStorage.setItem("user","123456")


            } else if (useType === "SignUp") {
                console.log("Successfully SignUp");


            } else if (useType === "forgetPassowrd") {
                console.log("Successfully Forget Passowrd");
            }
            resetForm()
        },
    });

    const signinwithgoogle = () => {
        dispatch(googleLogin())
    }

    return (
        <div>
            {/* Breadcrumb Start */}
            <div className="bread-crumb">
                <div className="container">
                    <div className="matter">
                        <h2>Login / Signup</h2>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="index.html">HOME</a></li>
                            <li className="list-inline-item"><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            <main id="main">
                <section id="contact" className="contact">
                    <div className="container">
                        <div className='login' style={{ width: "50%", margin: "auto" }}>
                            <Formik value={formik}>
                                <Form onSubmit={formik.handleSubmit}>
                                    {
                                        useType === 'forgetPassowrd' ?
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.email ?
                                                        <p>{formik.errors.email}</p> : null
                                                }
                                            </FormGroup>
                                            : null
                                    }
                                    {
                                        useType === "SignUp" ?
                                            <></>
                                            :
                                            null
                                    }
                                    {
                                        (useType === "Login" || useType === "SignUp") &&
                                        <>
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="exampleEmail"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.email ?
                                                        <p>{formik.errors.email}</p> : null
                                                }
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="examplePassword"
                                                    name="password"
                                                    placeholder="password"
                                                    type="password"
                                                    onChange={formik.handleChange}
                                                />
                                                {
                                                    formik.errors.password ?
                                                        <p>{formik.errors.password}</p> : null
                                                }
                                            </FormGroup>
                                        </>
                                    }
                                    {
                                        useType === "Login" ?
                                            <div className="text-center">
                                                <Button type='submit'
                                                    className="appointment-btn scrollto m-0 bg-primary">Login</Button>
                                                <p className="mt-3 cursor-pointer m-3 " onClick={() => setUseType("forgetPassowrd")}
                                                    style={{ cursor: "pointer" }}>Forgot Password</p>
                                                <Button type='submit' className="appointment-btn scrollto m-3 bg-primary"
                                                    onClick={() => setUseType("SignUp")}>Sign Up</Button>
                                            </div> :
                                            <div className="text-center">
                                                <Button type='submit' className="appointment-btn scrollto m-0">
                                                    {
                                                        useType === 'forgetPassowrd' ? "Submit" : "Sign Up"
                                                    }</Button>
                                                <Button type='submit' className="appointment-btn scrollto m-0"
                                                    onClick={() => setUseType("Login")}>Login
                                                </Button>
                                            </div>
                                    }
                                    <div className="text-center m-3">
                                        <Button type='submit' className="appointment-btn scrollto m-0"
                                            onClick={() => signinwithgoogle()}><GoogleIcon className='m-1'></GoogleIcon>Sign in With Google
                                        </Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}

export default Login;