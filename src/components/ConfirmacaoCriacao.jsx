import React from 'react';

const ConfirmacaoCriacao = ({ aoReiniciar }) => {
  return (
    <div className="consulta-wrapper">
      <div className="consulta-card" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="check-circle" role="status" aria-label="Confirmação de sucesso">
          <span className="check">✔</span>
        </div>

        <h2>Consulta criada com sucesso!</h2>

        <p className="mensagem-sucesso">
          A consulta foi agendada corretamente. Você pode criar uma nova consulta abaixo.
        </p>

        <button
          className="btn-siguiente"
          onClick={aoReiniciar}
          aria-label="Criar nova consulta"
        >
          Nova consulta
        </button>
      </div>
    </div>
  );
};

export default ConfirmacaoCriacao;
