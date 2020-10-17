import React from 'react';
import ContentPage from '../../../components/ContentPage';
import FloatingButton from '../../../components/FloatingButton';
import MainMenu from '../../../components/MainMenu';

import './styles.css';

function Usuários() {
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Configuração">
                <h3>Teste</h3>
            </ContentPage>
            <FloatingButton title="Adicionar Usuário" link="/Configuracao/Usuario/Adicionar" />
        </div>
    );
}


export default Usuários;