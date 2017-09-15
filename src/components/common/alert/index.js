import React, { Component } from 'react';
import "./index.css";

class AlertBlock extends Component {
    constructor() {
        super();
    }
    render() {
        const alertClass = ("alert alert-" + this.props.alert.type);
        return (
            <div className={alertClass} role="alert">
                <button type="button" className="close"
                    aria-label="Close" onClick={this.closeAlert.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.props.alert.text}
            </div>
        );
    }
    closeAlert() {
        this.props.closeAlert(this.props.alert.id);
    }
}

class AlertManager extends Component {
    constructor() {
        super();
        this.state = {
            alertList: [],
            open: false
        };
    }
    render() {
        return (
            <div className="alert-block">
                {this.state.alertList.map((alert, i) => {
                    return (<AlertBlock
                        alert={alert}
                        key={i}
                        closeAlert={this.closeAlert.bind(this)}
                        className={this.state.showAlert ? "" : "hidden"} />);
                })}
            </div>
        );
    }
    componentWillMount() {
        console.log("componentWillReceiveProps");
        let newArray = [];
        this.props.alertList.map((alert, i) => {
            const id = (new Date().getTime()) + i;
            newArray.push({
                id,
                type: alert.type,
                text: alert.text
            });
        });
        this.setState({ alertList: newArray });
        this.state.alertList;
    }
    closeAlert(id) {
        let newList = [];
        newList = this.state.alertList.filter((alert) => {
            return (alert.id !== id);
        });
        this.setState({ alertList: newList });
    }
}

export default AlertManager;
