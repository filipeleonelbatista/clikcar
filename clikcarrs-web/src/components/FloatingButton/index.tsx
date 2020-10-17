import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

interface FloatingButtonProps {
    title: string;
    link:string;
}

const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
    return (
        <Link to={props.link} className="floating-container">
            <div className="floating-icon">
                <FaPlus size={14} />
            </div>
        </Link>
    );
}

export default FloatingButton;