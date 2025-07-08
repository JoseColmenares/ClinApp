import React, { useState, useEffect } from 'react';
import PacienteFormModal from '../PacienteFormModal';
import PacienteDetalheModal from '../PacienteDetalheModal';
import PacienteTabela from '../PacienteTabela';
import PacienteEmpty from '../PacienteEmpty';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
  const [buscaCpf, setBuscaCpf] = useState('');

  useEffect(() => {
    const armazenados = localStorage.getItem('pacientes');
    if (armazenados) setPacientes(JSON.parse(armazenados));
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const adicionarPaciente = (paciente) => {
    if (paciente.id_id_paciente) {
      setPacientes(prev =>
        prev.map(p => p.id_id_paciente === paciente.id_id_paciente ? paciente : p)
      );
    } else {
      setPacientes(prev => [
        ...prev,
        { ...paciente, id_id_paciente: Date.now() }
      ]);
    }
    setShowFormModal(false);
  };

  const excluirPaciente = (id) =>
    setPacientes(prev => prev.filter(p => p.id_id_paciente !== id));

  const pacientesFiltrados = buscaCpf
    ? pacientes.filter(p => p.cpf.includes(buscaCpf))
    : pacientes;

  return (
    <div className="pacientes-main">
      <div className="pacientes-top">
        <div className="pacientes-header">
          <h2>Pacientes</h2>
          <p>Gerencie as informações dos seus pacientes</p>
          <input
            className="pacientes-search"
            type="text"
            placeholder="Buscar paciente por CPF"
            value={buscaCpf}
            onChange={e => setBuscaCpf(e.target.value)}
          />
        </div>

        <div
          className="pacientes-criar"
          onClick={() => {
            setPacienteSelecionado(null);
            setShowFormModal(true);
          }}
        >
          <p><strong>Criar paciente</strong></p>
          <p className="pacientes-subtitle">Crie pacientes de forma fácil</p>
          <div className="pacientes-dashed">+</div>
        </div>
      </div>

      {pacientesFiltrados.length === 0 ? (
        <PacienteEmpty />
      ) : (
        <PacienteTabela
          pacientes={pacientesFiltrados}
          onEditar={p => {
            setPacienteSelecionado(p);
            setShowFormModal(true);
          }}
          onExcluir={excluirPaciente}
          onSelecionar={setPacienteSelecionado}
        />
      )}

      {showFormModal && (
        <PacienteFormModal
          paciente={pacienteSelecionado}
          onClose={() => setShowFormModal(false)}
          onSalvar={adicionarPaciente}
        />
      )}

      {pacienteSelecionado && !showFormModal && (
        <PacienteDetalheModal
          paciente={pacienteSelecionado}
          onClose={() => setPacienteSelecionado(null)}
        />
      )}
    </div>
  );
};

export default Pacientes;
