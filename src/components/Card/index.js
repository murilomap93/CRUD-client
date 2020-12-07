import React, { useState } from 'react';
import './index.css';
import Axios from 'axios';
export default props => {
    const [fil_codigo, setFilCodigo] = useState(props.filme.fil_codigo);
    const [fil_nome, setFilNome] = useState(props.filme.fil_nome);
    const [fil_descricao, setFilDescricao] = useState(props.filme.fil_descricao);
    const deleteReview = (fil_codigo) => {
        Axios.delete('http://localhost:3003/api/delete/' + fil_codigo)
            .then(() => {
                props.getMovieList();
            });
    };
    const updateReview = (fil_codigo) => {
        console.log(fil_codigo, fil_descricao)
        Axios.put('http://localhost:3003/api/update/' + fil_codigo, { movieReview: fil_descricao })
            .then(() => { alert('sucesso') });
    };
    return (
        <>
            <div className='Card'>
                <div className='Content' style={{ background: props.color || '#000' }}>
                    {fil_nome}
                </div>
                <div className='Foolter'>
                    <input type='text' name='review' value={fil_descricao} onChange={(e) => { setFilDescricao(e.target.value) }}></input>
                </div>
                <div className='Events'>
                    <button onClick={() => deleteReview(fil_codigo)}>Deletar Filme</button>
                    <button onClick={() => updateReview(fil_codigo)}>Atualizar Comentário</button>
                </div>
            </div>
        </>
    );
}