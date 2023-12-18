// Consultar.js
import { useEffect, useState } from "react";
import "./consulta.css";
import Card from "./card";

export default function Consultar() {
  const [projetos, setProjetos] = useState([]);

  function consultar() {
    fetch("http://localhost:8080/Projetos")
      .then((data) => data.json())
      .then((response) => {
        console.log("Dados recebidos:", response);
        setProjetos(response);
      })
      .catch((error) => console.error("Erro ao consultar projetos:", error));
  }

  useEffect(() => {
    consultar();
  }, []);

  return (
    <div>
      <h2>Consulta de Projetos</h2>
      <div className="d-flex flex-wrap">
        {projetos.map((prj) => (
          <Card projeto={prj} key={prj.id} />
        ))}
      </div>
    </div>
  );
}
