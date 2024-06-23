import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate("/dashboard/home");
    }
    return (
        <div>
            <div className='primary-nav'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                </nav>

            </div>
            <br />
            <br />
            <div id="card" className='container'>
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div class="underline-title"></div>
                    </div>
                    <div className='container'>
                        {/* <h1>React Hook Form</h1> */}

                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div class="form-group row ">
                                <label for="InputEmail1" class="col-sm-2 col-form-label">Email address</label>
                                <input type="email"
                                    className="form-content col-sm-2"
                                    placeholder="Email" {...register("email",
                                        {
                                            required: true,
                                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                                        })} />
                                {errors.email && errors.email.type === "required" && <span>This field is required</span>}
                            </div>
                            <div class="form-group row">
                                <label for="InputPassword1" class="col-sm-2 col-form-label">Password</label>
                                <input type="password"
                                    className="form-content col-sm-2"
                                    placeholder="Password"
                                    {...register("password",
                                        {
                                            required: true, minLength: 6

                                        })} />
                                {errors.password && errors.password.type === "required" && <span>Minimum 6 characters needed</span>}

                            </div>
                            <input id="submit-btn" type="submit" class="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
}