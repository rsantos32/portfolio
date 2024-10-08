import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Contato from './pages/Contato';
import { StoreContext, stateInitial } from '../data/StoreContext';
import Header from './pages/Header';
import Appbar from './ui/Appbar/Appbar';

function App() {
  return (
    <>
      <Appbar />
      <Header />
      <main className='container'>
        <StoreContext.Provider value={[stateInitial]}>
          <Sobre />
          <Servico />
          <Contato />
        </StoreContext.Provider>
        <footer className='row d-flex my-5'>
          <div className='col-sm-12 text-center'>
            <p>Desenvolvido por <strong>Rodrigo Santos</strong> &bull; {new Date().getFullYear()} &copy; Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
