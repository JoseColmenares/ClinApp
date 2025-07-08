import React, { useState } from 'react';

const DataHora = ({ dados, atualizarDados, proximaEtapa, etapaAnterior }) => {
  const [dataSelecionada, setDataSelecionada] = useState(dados.data);
  const [horaSelecionada, setHoraSelecionada] = useState(dados.hora);

  const horarios = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30'];

  const handleDataChange = (e) => {
    setDataSelecionada(e.target.value);
    atualizarDados({ data: e.target.value });
  };

  const handleHoraClick = (hora) => {
    setHoraSelecionada(hora);
    atualizarDados({ hora });
  };

  const podeAvancar = dataSelecionada && horaSelecionada;

  return (
    <div className="datahora-wrapper">
      <div className="datahora-card">
        <div className="datahora-header">Data</div>

        <div className="datahora-formulario">
          <input
            type="date"
            value={dataSelecionada}
            onChange={handleDataChange}
          />

          <div className="horarios-disponiveis">
            {horarios.map((hora) => (
              <button
                key={hora}
                className={horaSelecionada === hora ? 'selecionado' : ''}
                onClick={() => handleHoraClick(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>

        <div className="datahora-footer">
          <button onClick={etapaAnterior} className="btn-anterior">Anterior</button>
          <button
            onClick={proximaEtapa}
            className="btn-siguiente"
            disabled={!podeAvancar}
          >
            Seguinte
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataHora;
