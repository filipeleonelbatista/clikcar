import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
};

const InputCheckbox: React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <label htmlFor={name} className="checkbox-container">
            {label}{rest.required && <strong>*</strong> }
            <input type="checkbox" id={name} {...rest} />            
            <span className="checkmark"></span>
        </label>
    );
}

export default InputCheckbox;