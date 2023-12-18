import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detalhe.css";

export default function Detalhes() {
    const [nome, setNome] = useState('');
    const [equipe, setEquipe] = useState('');
    const [tarefa, setTarefa] = useState('');
    const [detalhes, setDetalhes] = useState('');

    const { idProjeto } = useParams();

    function salvar() {
        let obj = { id: idProjeto, nome, equipe, tarefa, detalhes };

        fetch(`http://localhost:8080/Projetos/${idProjeto}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.ok) {
                    alert('Projeto salvo com sucesso');
                } else {
                    throw new Error('Erro ao salvar o projeto');
                }
            })
            .catch(error => alert(error.message));
    }

    useEffect(() => {
        fetch(`http://localhost:8080/Projetos/${idProjeto}`)
            .then(data => data.json())
            .then(response => {
                setNome(response.nome);
                setEquipe(response.equipe);
                setTarefa(response.tarefa);
                setDetalhes(response.detalhes);
            });
    }, [idProjeto]);

    return (
        <div className="container">
            <h2 className="text-center">Editar Projeto: {idProjeto}</h2>
            <label className="form-label">Informe o nome do Projeto</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o nome do Projeto"
                value={nome}
                onChange={txt => setNome(txt.target.value)}
            />

            <label className="form-label">Informe a equipe</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a equipe"
                value={equipe}
                onChange={txt => setEquipe(txt.target.value)}
            />

            <label className="form-label">Informe a tarefa</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a tarefa"
                value={tarefa}
                onChange={txt => setTarefa(txt.target.value)}
            />

            <label className="form-label">Informe os detalhes do projeto</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe os detalhes do projeto"
                value={detalhes}
                onChange={txt => setDetalhes(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">
                    Salvar
                </button>
                <button className="btn btn-danger">Cancelar</button>
            </div>
        </div>
    );
}
