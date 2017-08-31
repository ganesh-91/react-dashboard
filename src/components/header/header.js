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
                <div className="row no-margin">
                    <div className="col-md-6"
                        onDragOver={this.allowDrop}
                        onDrop={this.drop.bind(this)}>
                        <div className="background-white padding-20 " >
                            {this.state.obj}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <input id="new" ref="new"
                            className="bg-color"
                            draggable onDragStart={this.drag} />
                    </div>
                </div>
            </div>
        );
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");
        var ref = this.refs[data];
        var el = {
            tagName: ref.tagName.toLowerCase(),
            type: ref.type,
            className: ref.className,
            id: ref.id
        };
        var elReact = React.createElement(el.tagName, el);
        this.setState({ obj: this.state.obj.concat(elReact) });
        // ReactDOM.render(elReact, document.getElementById("app1"));
        this.state.obj;
    }
}

export default Header;
