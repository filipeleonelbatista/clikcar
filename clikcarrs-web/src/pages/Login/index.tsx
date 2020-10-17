import React from 'react';

import Logo from '../../assets/images/logo.png';

import Input from '../../components/Input';

import './styles.css';

function Login() {
    return (
        <div id="page-login">
            <div className="image">
                <img src={Logo} alt="ClikCarRS" />
            </div>
            <div className="content-login">
                <div className="title">
                    Bem vindo novamente
                </div>
                <div className="content-block">
                    <div className="w-content">
                        <div className="title">
                            Faça seu login para entrar na plataforma
                        </div>
                        <div className="error">
                            Mensagem de erro
                        </div>
                        <Input label="Email" name="email" />
                        <Input label="Senha" name="senha" />
                        <div className="checkbox-group">
                            <input type="checkbox" name="lembrar" />
                            <label htmlFor="lembrar"> Mantenha-me conectado</label>
                        </div>
                        <button className="submit">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;