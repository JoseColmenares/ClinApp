import React from 'react';

const SelecionarServico = ({ dados, atualizarDados, proximaEtapa }) => {
  const servicos = [
    { id: '1', nome: 'Clínico Geral', preco: 100 },
    { id: '2', nome: 'Pediatria', preco: 150 },
    { id: '3', nome: 'Ortopedia', preco: 200 }
  ];

  const medicos = [
    'Dr. João Silva',
    'Dra. Ana Lima',
    'Dr. Carlos Souza'
  ];

  const servicoSelecionado = servicos.find(s => s.nome === dados.id_servico);
  const desabilitado = !dados.id_servico || !dados.medico;

  return (
    <div className="consulta-wrapper">
      <div className="consulta-card">
        <div className="consulta-header">
          Selecionar serviço
        </div>

        <div className="consulta-conteudo">
          {/* Formulário de seleção */}
          <div className="consulta-formulario">
            {/* Campo Serviço */}
            <div className="campo">
              <label htmlFor="servico">Serviço médico</label>
              <div className="campo-com-icone">
                <select
                  id="servico"
                  value={dados.id_servico}
                  onChange={(e) => atualizarDados({ id_servico: e.target.value })}
                >
                  <option value="">Selecione...</option>
                  {servicos.map((servico) => (
                    <option key={servico.id} value={servico.nome}>
                      {servico.nome}
                    </option>
                  ))}
                </select>
                
              </div>
            </div>

            {/* Campo Médico */}
            <div className="campo">
              <label htmlFor="medico">Médico especialista</label>
              <select
                id="medico"
                value={dados.medico}
                onChange={(e) => atualizarDados({ medico: e.target.value })}
              >
                <option value="">Selecione...</option>
                {medicos.map((medico, i) => (
                  <option key={i} value={medico}>{medico}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Visualização ou imagem de serviço */}
          <div className="consulta-imagem">
            {servicoSelecionado ? (
              <div style={{ background: '#e7fff0', padding: 20, borderRadius: 8 }}>
                <p style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 10 }}>
                  Criar serviço
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#fff',
                  border: '1px solid #ddd',
                  padding: '8px 12px',
                  borderRadius: 6
                }}>
                  <span>{servicoSelecionado.nome}</span>
                  <span>R$ {servicoSelecionado.preco}</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 13, color: '#444' }}>
                  <strong>Preço total:</strong> R$ {servicoSelecionado.preco}
                </p>
              </div>
            ) : (
              <>
                <img
                  src="/lupa.png"
                  alt="Nenhum pacote encontrado"
                  style={{ width: 120, opacity: 0.8 }}
                />
                <p className="texto-info">Nenhum serviço selecionado</p>
              </>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <div className="consulta-footer">
          <button
            className="btn-siguiente"
            disabled={desabilitado}
            onClick={proximaEtapa}
          >
            Seguinte
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelecionarServico;
