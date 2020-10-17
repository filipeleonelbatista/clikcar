import React from 'react';

import { NavLink } from 'react-router-dom';


import Logo from '../../assets/images/logo.png';
import { FaTachometerAlt, FaCogs, FaFileInvoice, FaUserTie, FaUserCircle, FaCashRegister, FaCarAlt } from 'react-icons/fa';

import './styles.css';

const MainMenu: React.FC = () => {
    return (
        <div className="menu">
            <div className="brand">
                <img src={Logo} alt="ClokCarRS" />
            </div>
            <div className="menu-principal">
                <NavLink className="menu-item" activeClassName="active" to="/Inicio">
                    <FaTachometerAlt />
                        Pagina Principal
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Contratos">
                    <FaFileInvoice />
                        Contratos
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Investidores">
                    <FaUserTie />
                        Investidores
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Motoristas">
                    <FaUserCircle />
                        Motoristas
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Financeiro">
                    <FaCashRegister />
                        Financeiro
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Veiculos">
                    <FaCarAlt />
                        Veículos
                    </NavLink>
                <NavLink className="menu-item" activeClassName="active" to="/Locacao">
                    <FaCarAlt />
                        Locação
                    </NavLink>
            </div>
            <div className="menu-footer">
                <NavLink activeClassName="active" className="menu-item" to="/Configuracao">
                    <FaCogs />
                        Configurações
                    </NavLink>
            </div>

        </div>
    );
}

export default MainMenu;