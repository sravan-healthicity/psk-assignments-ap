import React from "react";
import { NavLink, Navigate } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sravan Demo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink to="home" className="nav-link">Home</NavLink>
                            <li className="nav-item"><NavLink to="contact" className="nav-link">Contact</NavLink></li>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="college"
                                        className="nav-link dropdown-toggle"
                                        id="navbarDropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        College
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <NavLink to="college/student" className="dropdown-item">
                                                Student
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="college/teacher" className="dropdown-item">
                                                Teacher
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <li><NavLink to="axios" className="nav-link">Axios</NavLink></li>
                            {/* <li><NavLink to="hook-form">React Hook Form</NavLink></li> */}
                            <li><NavLink to="nested-axio" className="nav-link">Nested Axio</NavLink></li>
                            {/* <li><NavLink to="form">Form</NavLink></li> */}
                            <li><NavLink to="counter" className="nav-link">Counter</NavLink></li>
                            <li ><NavLink to="spa" className="nav-link">SPA</NavLink></li>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="hook"
                                        className="nav-link dropdown-toggle"
                                        id="hooksDropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Hooks
                                    </NavLink>

                                    <ul className="dropdown-menu" aria-labelledby="hooksDropdown">
                                        <li>
                                            <NavLink to="hook/use-effect" className="dropdown-item">
                                                useEffect
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="hook/use-memo" className="dropdown-item">
                                                useMemo
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="hook/use-context" className="dropdown-item">
                                                useContext
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        to="component-types"
                                        className="nav-link dropdown-toggle"
                                        id="componentTypesDropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Component Type
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="componentTypesDropdown">
                                        <li>
                                            <NavLink to="component-types/class-demo" className="dropdown-item">
                                                Class
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="component-types/function-demo" className="dropdown-item">
                                                Functional
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <li><NavLink to="conditional-demo" className="nav-link">Conditional Component</NavLink></li>
                            <li><NavLink to="lifecycle" className="nav-link">Lifecycle</NavLink></li>
                            <li><NavLink to="data-map" className="nav-link">Data Map</NavLink></li>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}

                        </ul>

                        <ul className="navbar-nav">
                            <li className="float-rt"><NavLink to="/" className="nav-link">Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
}