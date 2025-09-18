import React from 'react'


interface ResultProps { //componente del resultado 
value: Text;
}

const Result: React.FC <any> = ({value}) => {
    return (
        <div>
            <h2>Resultado: {value}</h2>
        </div>
    );
};
    
export default Result;