import React from 'react';
import ContentPage from '../../components/ContentPage';
import FloatingButton from '../../components/FloatingButton';
import MainMenu from '../../components/MainMenu';

import './styles.css';

function Locacao() {
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Locação">
                <h3>Teste</h3>
            </ContentPage>
            <FloatingButton title="Adicionar Investidor" link="/investidor/add" />
        </div>
    );
}


export default Locacao;