import React from 'react';
import ContentFromTextA from './contentInTextArea'

const styleArea = {
    width: "80vw",
    height: "50vh",
    marginBottom: "2em"
}

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Andres Crespi" 
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newContent) {
        this.setState({value: newContent});
    }

    render() {
        const valor = this.state.value;
        return (
            <div>               
                <ContentFromTextA 
                    valorTA={valor}
                    onChangeTA={this.handleChange}
                />
            </div>
        );
    }
}


export default TextArea;