import './App.css';
import {Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Gestão de Projetos</h1>
      <nav>
        <Link to='/projetos/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/projetos/consultar'>Consulta</Link> &nbsp;
        <Link to='/projetos/detalhes/1'>Detalhes</Link>
      </nav>
      <main>
         <Outlet />
      </main>
    </div>
  );
}

export default App;