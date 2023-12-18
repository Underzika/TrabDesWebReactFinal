import { useEffect, useState } from "react"

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [equipe, setEquipe] = useState('')
    const [tarefa, setTarefa] = useState('')
    const [detalhes, setDetalhes] = useState('')

    function salvar(){

        let obj={nome, equipe, tarefa, detalhes}

        fetch('http://localhost:8080/Projetos',
        {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        })
        .then(x => alert('Novo Projeto criado'))
    }

    return (
        <div className="container">
            <h2 className="text-center">Novo Projeto</h2>
            <label className="form-label">Informe o nome Projeto</label>

            <input className="form-control" type="text"
                placeholder="Nome do projeto" value={nome} onChange={txt =>
                    setNome(txt.target.value)} />

            <label className="form-label">Informe a equipe</label>
            <input className="form-control" type="text" placeholder="Equipe" value={equipe} onChange={txt => setEquipe(txt.target.value)} />

            <label className="form-label">Informe a tarefa</label>
            <input className="form-control" type="text" placeholder="Tarefa" value={tarefa} onChange={txt => setTarefa(txt.target.value)} />

            <label className="form-label">Informe os detalhes do projeto</label>
            <input className="form-control" type="text" placeholder="Detalhes" value={detalhes} onChange={txt => setDetalhes(txt.target.value)} />


            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} 
                        className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div> 
            
            
 {/* {`${nome} ${equipe} ${tarefa} ${detalhes}`} */}

        </div>
    )
}