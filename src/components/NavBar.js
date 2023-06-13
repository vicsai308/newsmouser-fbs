import React from 'react'
import {
    Link,
  } from "react-router-dom";

const NavBar= () => {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Mouser</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar;