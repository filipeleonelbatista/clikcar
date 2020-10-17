import React from 'react';

import { FaRegUser, FaRegBell } from 'react-icons/fa';

import './styles.css';

interface ContentPageProps {
    title: string;
}

const ContentPage: React.FC<ContentPageProps> = (props) => {
    return (
        <div className="content">
                <div className="nav">
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
                <div className="page-container">
                    <h1>{props.title}</h1>

                    <div className="page-container">
                        {props.children}
                    </div>
                </div>
            </div>
    );
}

export default ContentPage;