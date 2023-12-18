import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import Detalhe from './componentes/detalhe'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projetos/cadastrar",
        element: <Cadastro />
      },
      {
        path: "/projetos/consultar",
        element: <Consulta />
      },
      {
        path: "/projetos/detalhes/:idProjeto", 
        element: <Detalhe />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();