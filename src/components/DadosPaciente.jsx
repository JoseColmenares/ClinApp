import React, { useState } from 'react';

const pacientesFake = [
  { cpf: '12345678900', nome: 'Maria Oliveira', nascimento: '1990-01-01', telefone: '(49) 99999-0001' },
  { cpf: '98765432100', nome: 'Carlos Silva', nascimento: '1985-06-15', telefone: '(49) 99999-0002' },
  // ... mais pacientes se quiser
];

const DadosPaciente = ({ dados, atualizarDados, etapaAnterior, proximaEtapa }) => {
  const [cpfBusca, setCpfBusca] = useState('');
  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);
  const [erro, setErro] = useState('');

  const buscarPaciente = () => {
    const resultado = pacientesFake.find(p => p.cpf === cpfBusca);
    if (resultado) {
      setPacienteEncontrado(resultado);
      atualizarDados({ paciente: resultado });
      setErro('');
    } else {
      setPacienteEncontrado(null);
      atualizarDados({ paciente: null });
      setErro('Paciente não encontrado');
    }
  };

  return (
    <div className="consulta-wrapper">
      <div className="consulta-card">
        <div className="consulta-header">Dados do paciente</div>

        <div className="consulta-conteudo" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="campo-busca">
            <input
              type="text"
              placeholder="Buscar por CPF..."
              value={cpfBusca}
              onChange={(e) => setCpfBusca(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && buscarPaciente()}
            />
            <button onClick={buscarPaciente} className="btn-busca">
              🔍
            </button>
          </div>

          {erro && <p className="erro">{erro}</p>}

          {pacienteEncontrado && (
            <div className="resumo-paciente">
              <p><strong>Nome:</strong> {pacienteEncontrado.nome}</p>
              <p><strong>Nascimento:</strong> {pacienteEncontrado.nascimento}</p>
              <p><strong>Telefone:</strong> {pacienteEncontrado.telefone}</p>
            </div>
          )}
        </div>

        <div className="consulta-footer" style={{ justifyContent: 'space-between' }}>
          <button onClick={etapaAnterior} className="btn-anterior">Anterior</button>
          <button
            className="btn-siguiente"
            disabled={false}
            onClick={proximaEtapa}
          >
            Seguinte
          </button>
        </div>
      </div>
    </div>
  );
};

export default DadosPaciente;
