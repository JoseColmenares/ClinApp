import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/logoClinApp.png" alt="ClinApp Logo" className="logo-imagem" />
      <nav className="menu">
        <NavLink to="/consultas" className={({ isActive }) => isActive ? 'menu-item ativo' : 'menu-item'}>
          Consultas
        </NavLink>
        <NavLink to="/pacientes" className={({ isActive }) => isActive ? 'menu-item ativo' : 'menu-item'}>
          Pacientes
        </NavLink>
        <NavLink to="/medicos" className={({ isActive }) => isActive ? 'menu-item ativo' : 'menu-item'}>
          Médicos
        </NavLink>
        <NavLink to="/servicos" className={({ isActive }) => isActive ? 'menu-item ativo' : 'menu-item'}>
          Serviços
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
