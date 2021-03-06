import Calculator from './components/Calculator';
import './App.css';

function App() {
    return (
        <div className="grey lighten-3 page-wrapper">
            <header className="center-align blue lighten-1">
                <h3>
                    Calculadora de horas
                    <i className="material-icons calculator-icon">schedule</i>
                </h3>
            </header>
            <div className="container calculator-wrapper">
                <div className="card">
                    <div className="card-title blue lighten-1">
                        Informe as horas de entrada e saída e veja seu tempo de
                        trabalho no período diurno e noturno.
                    </div>
                    <div className="card-content">
                        <Calculator />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
