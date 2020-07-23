import React from 'react';
import '../area.css';
import {getTag} from "./funciones";

export default class ContentFromTextA extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChangeTA(e.target.value)
    }

    render () {
        const valor = this.props.valorTA;
        return (
            <div className="container">
                <textarea 
                    className="editor text-area"
                    value={valor}
                    onChange={this.handleChange}
                />
                {getTag(valor)}
            </div>
        )
    }
}