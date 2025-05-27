import './App.css'
import logo from './assets/logo-honda.png';
import honda from './assets/honda.jpg';

function App() {
  return (
    <>
      <div className="h-screen flex items-center flex-col">
        <img className='rounded-lg' src={logo} alt="Logo Honda" />
        <p className='uppercase mb-6 font-mono text-2xl'>pilot 2020</p>
        <img className='rounded-lg' src={honda} alt="Honda Pilot 2020" />
        <div className='mt-6 px-8 w-full flex justify-around'>
          <ul className='leading-8 sm:w-1/2 px-3'>
            <li className='break-words'>Sistema de Mitigación de Colisión con Frenado (CMBS™) + Sistema de Alerta de Frenado por Colisión Frontal (FCW)</li>
            <li className='break-words'>Control de Velocidad Crucero Adaptativo (ACC) + Función de Seguimiento a Baja Velocidad (Low Speed Follow)</li>
            <li>Sistema Automático de Luces Altas (AHB)</li>
            <li>Sistema de Prevención de Colisión Trasera (CTM)</li>
            <li className='sm:hidden'>Sistema de Conservación de Carril (LKAS) + Alerta de cambio de carril (LDW)</li>
            <li className='sm:hidden'>Sistema de Mitigación de Salida de Carretera (RDMS)</li>
            <li className='sm:hidden'>Asistencia en Tráfico Pesado (TJA)</li>
            <li className='sm:hidden'>Sistema de Monitoreo de Punto Ciego (BSI)</li>
          </ul>
          <ul className='leading-8 w-1/2 px-3 hidden sm:block'>
            <li>Sistema de Conservación de Carril (LKAS) + Alerta de cambio de carril (LDW)</li>
            <li>Sistema de Mitigación de Salida de Carretera (RDMS)</li>
            <li>Asistencia en Tráfico Pesado (TJA)</li>
            <li>Sistema de Monitoreo de Punto Ciego (BSI)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
