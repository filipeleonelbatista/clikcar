import React from 'react';
import ContentPage from '../../components/ContentPage';
import MainMenu from '../../components/MainMenu';

import './styles.css';

function Configuracao() {
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage links={[
                                { linkTo: "/Configuracao", linkTitle: "Geral"},
                                { linkTo: "/Configuracao/Usuarios", linkTitle: "Usuários"},
                                ]} 
                         title="Configuração">
                <h3>Teste</h3>
            </ContentPage>
        </div>
    );
}


export default Configuracao;