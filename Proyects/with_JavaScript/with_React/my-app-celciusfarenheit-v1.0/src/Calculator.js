import React from 'react';
import { tryConvert, toCelsius, toFahrenheit } from './utilFunction';
import TemperatureFunction from "./TemperatureFunction";
import BolingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};
        
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);   
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? 
            tryConvert(temperature, toCelsius) 
            : 
            temperature;
        const fahrenheit = scale === 'c' ? 
            tryConvert(temperature, toFahrenheit) 
            : 
            temperature;
        return (
            <div>
                <TemperatureFunction
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureFunction 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BolingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}

export default Calculator;