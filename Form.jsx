
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Form() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);

    const calcularIMC = () => {
    if (altura && peso) {
        const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
        setIMC(imcCalculado);
    }
    };

    return (
    <div>
        <h2>Calculadora de IMC</h2>
        <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc !== null && (
        <p>Seu IMC é: {imc.toFixed(2)}</p>
        )}
    </div>
    );
    }

export default Form;
