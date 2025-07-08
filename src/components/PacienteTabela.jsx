import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import '../App.css';

const PacienteTabela = ({ pacientes, onEditar, onExcluir, onSelecionar }) => {
  return (
    <div className="tabela-container">
      <table className="tabela-pacientes">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr
              key={p.id}
              className={p.destacado ? 'linha-destacada' : ''}
              onClick={() => onSelecionar(p)}
            >
              <td>{p.nome}</td>
              <td>{p.cpf}</td>
              <td>{p.email}</td>
              <td>{p.telefone}</td>
              <td className="acoes">
                <button
                  className="btn-editar"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditar(p);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn-excluir"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExcluir(p.id);
                  }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PacienteTabela;
