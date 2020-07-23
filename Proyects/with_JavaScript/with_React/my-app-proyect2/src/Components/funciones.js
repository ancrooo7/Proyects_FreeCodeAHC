import React from "react"

export function getTag(valor) {

    let arr = valor.split('');
    let valor_1 = valor;

    if (arr[0] === "#") {
        if (arr[1] === "#") {
            if (arr[2] === "#") {
                return (<h3>{valor_1.match(/[^#][A-Za-z! ]*/)}</h3>)
            } else return (<h2>{valor_1.match(/[^#][A-Za-z! ]*/)}</h2>)
        } else return (<h1>{valor_1.match(/[^#][A-Za-z!. ]*/)}</h1>)
    }
    else if(valor_1.indexOf('`') !== -1) {
        const indexChar_1 = valor_1.indexOf('`');
        let partTwo = valor_1.slice(indexChar_1+1);
        let code = partTwo.slice(0, partTwo.indexOf('`'));
        return (
        <p>
            {valor_1.slice(0, indexChar_1)}
            <code>{code}</code>
            {partTwo.split('').reverse().join('').indexOf('`') !== -1 ? partTwo.slice(partTwo.indexOf('`')+1) : null}
        </p>
        );
    }
    else if (valor_1.match(/^[^_]*[_]{1}[^_]*[_]{1}[^_]*/)) {
        if (valor_1.match(/^[^_]*[*]{2}[_]{1}[^_]*[_]{1}[*]{2}[^_]*/)) {
            const boldItalic = valor_1.match(/[*]{2}[_]{1}[^_]*[_]{1}[*]{2}/)[0];
            let boldItalic_1 = boldItalic.slice(3, boldItalic.length-3);
            console.log(boldItalic_1);
            return (
                <p>
                    {valor_1.match(/^[^_*]*/)}
                    <b><i>{boldItalic_1}</i></b>
                    {valor_1.match(/[^_*]*$/)}
                </p>
            )
        }else {
            const bold = valor_1.match(/[_]{1}([^_])*[_]{1}/)[0];
            let bold_1 = bold.slice(1, bold.length -1)
            return (
                <p>
                    {valor_1.match(/^[^_]*/)}
                    <b>{bold_1}</b>
                    {valor_1.match(/[^_]*$/)}
                </p>
            )
        }
    }
    else if (valor_1.match(/^[^~]*[~]{2}[^_]*[~]{2}[^~]*/)) {
        const strike = valor_1.match(/[~]{2}([^_])*[~]{2}/)[0];
        let strike_1 = strike.slice(2, strike.length -2)
        return (
            <p>
                {valor_1.match(/^[^~]*/)}
                <s>{strike_1}</s>
                {valor_1.match(/[^~]*$/)}
            </p>
        )
    }
    else if (valor_1.match(/[{1}[a-zA-Z]*]{1}/)){
        return (
            <p>{valor_1.match(/[{1}[a-zA-Z]*]{1}/)}</p>
        )
    } 
    else return <p>valor</p>;
}