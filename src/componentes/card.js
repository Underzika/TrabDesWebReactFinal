// Card.js
import React from "react";
import "./detalhe.css";
import { Link } from "react-router-dom";

export default function Card({ projeto }) {
  // verificações para evitar erros se o projeto for indefinido
  if (!projeto) {
    return <div>Projeto indefinido</div>;
  }

  function excluir() {
    fetch(`http://localhost:8080/Projetos/${projeto.id}`, {
      method: "DELETE",
    }).then((x) => alert("Projeto excluído"));
  }

  return (
    <div className="project-container">
      <div className="card mt-3 col-sm-4 col-md-2">
        <div className="card-body">
          <div>
            <span className="fw-bold">Nome: </span>
            <span className="text-danger">{projeto.nome || "N/A"}</span>
          </div>

          <div>
            <span className="fw-bold">Equipe: </span>
            <span className="text-danger">{projeto.equipe || "N/A"}</span>
          </div>

          <div>
            <span className="fw-bold">Tarefa: </span>
            <span className="text-danger">{projeto.tarefa || "N/A"}</span>
          </div>

          <div>
            <span className="fw-bold">Detalhes: </span>
            <span className="text-danger">{projeto.detalhes || "N/A"}</span>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <Link to={`/projetos/detalhes/${projeto.id}`}>
            <button className="btn btn-outline-primary">Editar</button>
          </Link>{" "}
          &nbsp;
          <button onClick={excluir} className="btn btn-outline-danger">
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
