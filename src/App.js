import React, { useState, useEffect } from 'react';
import './App.css';

import Consultas from './components/pages/Consultas';
import PacienteFormModal from './components/PacienteFormModal';
import PacienteDetalheModal from './components/PacienteDetalheModal';
import PacienteTabela from './components/PacienteTabela';
import PacienteEmpty from './components/PacienteEmpty';
import Sidebar from './components/Sidebar';
import Medicos from './components/pages/Medicos';
import Servicos from './components/pages/Servicos';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
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
    if (paciente.id) {
      setPacientes(prev => prev.map(p => p.id === paciente.id ? paciente : p));
    } else {
      setPacientes(prev => [...prev, { ...paciente, id: Date.now() }]);
    }
    setShowFormModal(false);
  };

  const excluirPaciente = (id) => {
    setPacientes(prev => prev.filter(p => p.id !== id));
  };

  const pacientesFiltrados = buscaCpf
    ? pacientes.filter(p => p.cpf.includes(buscaCpf))
    : pacientes;

  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/pacientes" />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/servicos" element={<Servicos />} />

            <Route path="/pacientes" element={
              <>
                <div className="top-section">
                  <div>
                    <h2>Pacientes</h2>
                    <p>Gerencie as informações dos seus pacientes</p>
                    <input
                      className="search"
                      type="text"
                      placeholder="Buscar paciente por CPF"
                      value={buscaCpf}
                      onChange={e => setBuscaCpf(e.target.value)}
                    />
                  </div>

                  <div
                    className="criar-box"
                    onClick={() => {
                      setPacienteSelecionado(null);
                      setShowFormModal(true);
                    }}
                  >
                    <p><strong>Criar paciente</strong></p>
                    <p className="subtitle">Crie pacientes de forma fácil</p>
                    <div className="dashed-box">+</div>
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
              </>
            } />

            <Route path="*" element={<Navigate to="/pacientes" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
