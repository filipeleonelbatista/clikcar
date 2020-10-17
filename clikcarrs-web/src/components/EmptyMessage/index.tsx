import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface EmptyMessageProps {
    label: string;
    src: string;
    alt: string;
    linkTo: string;
    btnAction: string;
};

const EmptyMessage: React.FC<EmptyMessageProps> = ({ label, src, alt, linkTo, btnAction, ...rest }) => {
    return (
        <div className="w-container">
            <div className="no-register">
                <div className="img">
                    <img src={src} alt={alt}/>
                </div>
                <div className="text">
                    {label}
                </div>
                <div className="button">
                    <Link to={linkTo} className="btn success">{btnAction}</Link>
                </div>
            </div>
        </div>
    );
}

export default EmptyMessage;