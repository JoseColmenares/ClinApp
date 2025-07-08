import React, { useState, useEffect } from 'react';

const PacienteFormModal = ({ paciente, onClose, onSalvar }) => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    telefone: '',
    data_nasc: '',
    endereco: '',
    seguro: '',
  });

  useEffect(() => {
    if (paciente) {
      setFormData(paciente);
    }
  }, [paciente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(formData);
  };

  return (
    <div className="modal-form-container">
      <h2>Criar novo paciente</h2>
      <p>Complete os campos e registre o novo paciente</p>

      <form onSubmit={handleSubmit}>
        <div className="modal-form-grid">
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Sobrenome
            <input
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              required
            />
          </label>
          <label className="col-span-2">
            CPF
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefone
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </label>
          <label>
            Data de nascimento
            <input
              type="date"
              name="data_nasc"
              value={formData.data_nasc}
              onChange={handleChange}
            />
          </label>
          <label>
            Endereço
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
          </label>
          
        </div>

        <div className="modal-botoes">
          <button className="botao-cancelar" type="button" onClick={onClose}>
            Cancelar
          </button>
          <button className="botao-criar" type="submit">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PacienteFormModal;
