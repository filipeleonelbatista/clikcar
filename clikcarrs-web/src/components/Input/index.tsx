import React, { InputHTMLAttributes, useCallback } from 'react';

import './styles.css';

import { data, cep, moeda, telefone, celular, telefoneCelular, rg, cpf, cnpj, cpfCnpj } from '../../utils/masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    mask?: "data" | "cep" | "moeda" | "telefone" | "celular" | "telefone-celular" | "rg" | "cpf" | "cnpj" | "cpf-cnpj";
};

const Input: React.FC<InputProps> = ({ label, name, mask, ...rest }) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        if (mask === "cep") {
            cep(e);
        }
        if (mask === "moeda") {
            moeda(e);
        }
        if (mask === "telefone") {
            telefone(e);
        }
        if (mask === "celular") {
            celular(e);
        }
        if (mask === "telefone-celular") {
            telefoneCelular(e);
        }
        if (mask === "rg") {
            rg(e);
        }
        if (mask === "cpf") {
            cpf(e);
        }
        if (mask === "cnpj") {
            cnpj(e);
        }
        if (mask === "cpf-cnpj") {
            cpfCnpj(e);
        }
        if (mask === "data") {
            data(e);
        }
    },
        [mask]);

    return (
        <div className="input-block">
            <label htmlFor={name}>{label} {rest.required && <strong>*</strong>}</label>
            <input type="text" onKeyUp={handleKeyUp} id={name} {...rest} />
        </div>
    );
}

export default Input;