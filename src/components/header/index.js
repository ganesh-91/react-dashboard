import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            obj: []
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <span className="nav-item active">
                                <a className="nav-a" to="/">Home <span className="sr-only">(current)</span></a>
                            </span>
                            <span className="nav-item">
                                <a className="nav-a" to="/counter">Counter</a>
                            </span>
                            <span className="nav-item">
                                <a className="nav-a disabled" to="/about">About</a>
                            </span>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
