import React, { Component } from 'react';

class ContentViewWrapper extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
                <h1>Dashboard</h1>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default ContentViewWrapper;
