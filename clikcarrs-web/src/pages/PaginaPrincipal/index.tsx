import React from 'react';
import ContentPage from '../../components/ContentPage';
import MainMenu from '../../components/MainMenu';

import './styles.css';

function PaginaPrincipal() {
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Página Principal">
                <h3>Teste</h3>
            </ContentPage>
        </div>
    );
}


export default PaginaPrincipal;