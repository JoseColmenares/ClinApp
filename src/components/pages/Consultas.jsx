import React, { useState } from 'react';
import SelecionarServico from '../SelecionarServico';
import DataHora from '../DataHora';
import DadosPaciente from '../DadosPaciente';
import Confirmacao from '../Confirmacao';
import ConfirmacaoCriacao from '../ConfirmacaoCriacao';

const Consultas = () => {
  const [etapa, setEtapa] = useState(1);

  const [dadosConsulta, setDadosConsulta] = useState({
    id_servico: '',
    nome_servico: '',
    medico: '',
    data: '',
    hora: '',
    nome_paciente: '',
    cpf: '',
    telefone: '',
    endereco: '',
  });

  const proximaEtapa = () => setEtapa((prev) => prev + 1);
  const etapaAnterior = () => setEtapa((prev) => prev - 1);

  const atualizarDados = (novosDados) => {
    setDadosConsulta((prev) => ({ ...prev, ...novosDados }));
  };

  const salvarConsulta = () => {
    const agendadas = JSON.parse(localStorage.getItem('consultasAgendadas')) || [];
    agendadas.push(dadosConsulta);
    localStorage.setItem('consultasAgendadas', JSON.stringify(agendadas));
  };

  const reiniciarConsulta = () => {
    setDadosConsulta({
      id_servico: '',
      nome_servico: '',
      medico: '',
      data: '',
      hora: '',
      nome_paciente: '',
      cpf: '',
      telefone: '',
      endereco: '',
    });
    setEtapa(1);
  };

  const renderEtapa = () => {
    switch (etapa) {
      case 1:
        return (
          <SelecionarServico
            dados={dadosConsulta}
            atualizarDados={atualizarDados}
            proximaEtapa={proximaEtapa}
          />
        );
      case 2:
        return (
          <DataHora
            dados={dadosConsulta}
            atualizarDados={atualizarDados}
            proximaEtapa={proximaEtapa}
            etapaAnterior={etapaAnterior}
          />
        );
      case 3:
        return (
          <DadosPaciente
            dados={dadosConsulta}
            atualizarDados={atualizarDados}
            proximaEtapa={proximaEtapa}
            etapaAnterior={etapaAnterior}
          />
        );
      case 4:
        return (
          <Confirmacao
            dados={dadosConsulta}
            proximaEtapa={() => {
              salvarConsulta();
              proximaEtapa();
            }}
            etapaAnterior={etapaAnterior}
          />
        );
      case 5:
        return <ConfirmacaoCriacao aoReiniciar={reiniciarConsulta} />;
      default:
        return <div>Etapa inválida</div>;
    }
  };

  return (
    <div className="consultas-container app-consultas">
      <h2 className="titulo-etapa"></h2>
      {renderEtapa()}
    </div>
  );
};

export default Consultas;
