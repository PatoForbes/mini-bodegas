import './App.css';

//COMPONENTS
import Navigation from './componenents/navigation';
import Header from './componenents/header';
import Medidas from './componenents/medidas';
import Contacto from './componenents/contacto';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Medidas />
      <Contacto />
    </div>
  );
}

export default App;
