import React from 'react';

const PacienteEmpty = () => {
  return (
    <div className="empty-container">
      <img src="/sem-servicos.png" alt="Sem serviços" className="icone-vazio" />
      <p>Nenhum paciente cadastrado ainda.</p>
    </div>
  );
};

export default PacienteEmpty;
