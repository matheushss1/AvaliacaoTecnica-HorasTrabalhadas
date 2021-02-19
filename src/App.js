import React, {setState, useState} from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import moment from 'moment';



function App() {
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [doisInputs, setDoisInputs] = useState(false);
  const [menosDe24, setMenosDe24] = useState(false);
  const [horasDiurnas, setHorasDiurnas] = useState('');
  const [horasNoturnas, setHorasNoturnas] = useState(''); 
	
const converter12HorasPara24Horas = horas12h => {
  const [tempo, modificador] = horas12h.split(" ");
 
  let [horas, minutos] = tempo.split(":");
 
  if (horas === "12") {
    horas = "00";
  }
 
  if (modificador === "PM") {
    horas = parseInt(horas, 10) + 12;
  }
 
  return `${horas}:${minutos}`;
};



const handleClick = () => {
  //verifica se possui 2 inputs, de entrada e saida
  if(entrada != '' && saida != ''){
    setDoisInputs(true);
  }
  //se tiver 2 inputs, soma os 2 valores
  if(doisInputs){
    let entrada24h = converter12HorasPara24Horas(entrada);
    console.log("Conversão de entrada para 24h: ", entrada24h)
    let saida24h = converter12HorasPara24Horas(saida);
    console.log("Conversão de Saída para 24h: ", saida24h)
    let soma = moment(entrada24h, "hh:mm A").add(saida24h.substr(0,2), 'hours').add(saida24h.substr(3, 2), 'minutes');
    console.log("Soma dos 2: ", soma.toString())
  }
  
}
  

  return (
    <div className="App">
        <NavBar/>
        <div class="container">
          <div class="left green">
            <p class="flow-text">Seu horário de Entrada:</p>
            <label for="entrada"><i class="medium white-text material-icons">access_time</i></label>
            <input id="entrada" value={entrada} onSelect={event => setEntrada(event.target.value)} type="text" class="timepicker center"/>
          </div>
          <div class="right red">
            <p class="flow-text">Seu horário de Saída:</p>
            <label for="saida"><i class="medium white-text material-icons">access_time</i></label>
            <input id="saida" value={saida} onSelect={event => setSaida(event.target.value)} type="text" class="timepicker center"/>
          </div>
        </div>
        <div class="clearfix" />
        <button class="btn btn-large blue waves-effect" onClick={handleClick}>Calcular</button>
    </div>
  );
}

export default App;

