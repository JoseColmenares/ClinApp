import React from 'react';

const Confirmacao = ({ dados, etapaAnterior, confirmarConsulta }) => {
  return (
    <div className="consulta-wrapper">
      <div className="consulta-card">
        <div className="consulta-header">Confirmar consulta</div>

        <div className="grid-confirmacao">
          <div className="item">
            <label>Serviço</label>
            <div>{dados.id_servico || '—'}</div>
          </div>
          <div className="item">
            <label>Médico assistente</label>
            <div>{dados.medico || '—'}</div>
          </div>
          <div className="item">
            <label>Data</label>
            <div>{dados.data || '—'}</div>
          </div>
          <div className="item">
            <label>Hora</label>
            <div>{dados.hora || '—'}</div>
          </div>
          <div className="item">
            <label>Paciente</label>
            <div>{dados.nome || '—'}</div>
          </div>
          <div className="item">
            <label>Endereço</label>
            <div>{dados.endereco || 'Avenida Doctor Gomez'}</div>
          </div>
        </div>

        <div className="preco-container">
          <p className="titulo">Preço do serviço</p>
          <p className="valor">R$ {dados.preco || '200'}</p>
        </div>

        <div className="consulta-footer" style={{ justifyContent: 'space-between' }}>
          <button onClick={etapaAnterior} className="btn-anterior">Anterior</button>
          <button onClick={confirmarConsulta} className="btn-siguiente">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmacao;
