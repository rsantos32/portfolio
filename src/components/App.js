import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Contato from './pages/Contato';
import { StoreContext, stateInitial } from '../data/StoreContext';

function App() {
  return (
    <main className='container'>
      <StoreContext.Provider value={[stateInitial]}>
        <Sobre />
        <Servico />
        <Contato />
      </StoreContext.Provider>
    </main>
  );
}

export default App;
