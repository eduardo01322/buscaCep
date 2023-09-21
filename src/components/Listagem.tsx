import React, { Component, useState, ChangeEvent, FormEvent, useEffect} from 'react';
import styles from "../App.module.css";
import { CadastroInterface } from '../interfaces/CadastroInterface';
const Listagem = () => {

    const [usuarios, setUsuarios] = useState<CadastroInterface[]>([]);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'> Listagem de usuários</h5>
                    <table className='table table-houver'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>claudio</td>
                                <td>123.123.132-23</td>
                                <td>claudio@senai.br</td>
                                <td>
                                    <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                    <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </main>
        </div>
    );
}

export default Listagem;