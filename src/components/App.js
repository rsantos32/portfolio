import Sobre from './pages/Sobre';
import Servico from './pages/Servico';
import Contato from './pages/Contato';
import { StoreContext, stateInitial } from '../data/StoreContext';
import Header from './pages/Header';
import Navbar from './ui/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main className='container'>
        <StoreContext.Provider value={[stateInitial]}>
          <Sobre />
          <Servico />
          <Contato />
        </StoreContext.Provider>
        <footer className='row d-flex my-5'>
          <div className='col-sm-12 text-center'>
            <p>Desenvolvido por <strong>Rodrigo Santos</strong> &bull; 2010 - {new Date().getFullYear()} &copy; Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
