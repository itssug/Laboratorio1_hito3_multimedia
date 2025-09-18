
import React, { useState } from 'react';

const BusquedaBinaria: React.FC = () => { //definir constantes
    const [parrafo, setParrafo] = useState('');
    const [palabra, setPalabra] = useState('');
    const [resultado, setResultado] = useState<string>('');


    // buscar la palabra en el parrafo por ponerlo en un array y buscar en cadad uno
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const palabras = parrafo.split(' ');
        let posicion = -1;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i].toLowerCase() === palabra.toLowerCase()) {
                posicion = i;
                break;
            }
        }
        if (posicion !== -1) {
            setResultado(`La palabra "${palabra}" está en la posición ${posicion + 1} del párrafo.`);
        } else {
            setResultado(`La palabra "${palabra}" no fue encontrada en el párrafo.`);
        }
    };

    //input de la palabra y parrafo 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Parrafo:</label><br />
                <textarea value={parrafo} onChange={e => setParrafo(e.target.value)} rows={8} cols={40} />
            </div>
            <div>
                <label>Palabra:</label>
                <input type="text" value={palabra} onChange={e => setPalabra(e.target.value)} />
            </div>
            <button type="submit">Buscar palabra</button>
            <div style={{ marginTop: '10px'}}>{resultado}</div>
        </form>
    );
};

export default BusquedaBinaria;