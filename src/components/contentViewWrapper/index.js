import React, { Component } from 'react';
import AlertManager from "../common/alert";

class ContentViewWrapper extends Component {
    constructor() {
        super();
        this.state = {
            alertList: [
                {
                    type: "primary",
                    text: "this is a primary alert—check it out!"
                },
                {
                    type: "secondary",
                    text: "this is a secondary alert—check it out!"
                },
                {
                    type: "success",
                    text: "this is a success alert—check it out!"
                },
                {
                    type: "danger",
                    text: "this is a danger alert—check it out!"
                }
            ],
            open: false
        }
    }
    render() {
        return (
            <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
                <h1>Dashboard</h1>
                <AlertManager alertList={this.state.alertList} />
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
