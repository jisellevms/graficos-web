import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import logo from './logo.svg';
import './App.css';

function App() {
  const [options, setOptions] = useState({
    title: 'Gráfico',
    chartArea: { width: '50%' },
    colors: ['#32CD32', '#0000CD', '#FFD700'],
  })
  const [ data, setData ] = useState([
    ['x', 'Licenças vendidas', 'Clientes ativos', 'Clientes bloqueados'],
    ['Janeiro', 1000, 200, 50],
    ['Fevereiro', 1200, 400, 47],
    ['Março',  1700, 600, 70]
  ])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          marginTop: '30px',
          marginBottom: '30px'
        }}>
          <Chart 
          width={'700px'}
          height={'300px'}
          chartType="BarChart"
          data={data}
          options={options}
          />
          <hr/>
          <Chart 
          width={'700px'}
          height={'300px'}
          chartType="SteppedAreaChart"
          data={data}
          options={options}
          />
          <hr/>
          <Chart 
          width={'700px'}
          height={'300px'}
          chartType="LineChart"
          data={data}
          options={options}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
