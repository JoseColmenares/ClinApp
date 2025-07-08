import React from 'react';
import '../App.css';

const PacienteDetalheModal = ({ paciente, onClose }) => {
  if (!paciente) return null;

  return (
    <div className="modal-overlay">
      <div className="detalhe-modal">
        <h2>Detalhes do Paciente</h2>

        <div className="detalhe-info">
          <p><strong>ID:</strong> {paciente.id}</p>
          <p><strong>Nome:</strong> {paciente.nome} {paciente.sobrenome}</p>
          <p><strong>CPF:</strong> {paciente.cpf}</p>
          <p><strong>Email:</strong> {paciente.email}</p>
          <p><strong>Telefone:</strong> {paciente.telefone}</p>
          <p><strong>Data de Nascimento:</strong> {paciente.data_nascimento}</p>
          <p><strong>Endereço:</strong> {paciente.endereco}</p>
        </div>

        <div className="status-consulta">
          {paciente.consulta ? (
            <>
              <p className="texto-consulta verde">
                O paciente tem consulta agendada.
              </p>
              <p className="data-consulta">{paciente.consulta}</p>
            </>
          ) : (
            <p className="texto-consulta">O paciente não tem consultas atribuídas.</p>
          )}
        </div>

        <div className="detalhe-botoes">
          <button className="botao-cinza" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default PacienteDetalheModal;
