import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CapacityProvider } from './shared/contexts/capacityContext';
import Router from './routes';

function App() {
  return (
    <CapacityProvider>
      <Router/>
      <div className='footer'>{'by: Henry De la ossa'}</div>
    </CapacityProvider>

  );
}

export default App;
