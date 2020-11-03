import React from 'react';

import { FaRegUser, FaRegBell } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import './styles.css';

interface ContentPageProps {
    title: string;
    links?: Array<{
        linkTo: string;
        linkTitle: string;
    }>
}

const ContentPage: React.FC<ContentPageProps> = ({title, links=[], children}) => {
    return (
        <div className="content">
            <div className="nav">
                <div className="submenu">
                    <div className="submenu-list">
                        {
                        links !== [] 
                        ? (
                            links.map( link => {
                                return(
                                    <NavLink 
                                        key={link.linkTo}
                                        to={link.linkTo} 
                                        exact
                                        className="submenu-item" 
                                        activeClassName="active">
                                            {link.linkTitle}
                                    </NavLink>
                                )
                            })
                        )
                        : ""
                        }
                    </div>
                </div>
                <div className="nav-container">
                    <div className="welcome">
                        Bem vindo, Filipe de Leonel Batista
                    </div>
                    <div className="user-icon">
                        <FaRegUser size={24} />
                    </div>

                    <div className="notification">
                        <div className="notification-popup"></div>
                        <div className="notification-icon">
                            <FaRegBell size={24} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-container">
                <h1>{title}</h1>

                <div className="page-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ContentPage;