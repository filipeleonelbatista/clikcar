import React, { useState } from 'react';

import ContentPage from '../../components/ContentPage';
import EmptyMessage from '../../components/EmptyMessage';
import FloatingButton from '../../components/FloatingButton';
import MainMenu from '../../components/MainMenu';

import noData from '../../assets/images/no_data.png';

import './styles.css';

function Investidores() {
    const [investidores, setInvestidores] = useState("");
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Investidores">
                {investidores === ""
                    ? (
                        <EmptyMessage 
                            label="Não há investidores cadastrados" 
                            linkTo="/Investidores/Adicionar" 
                            src={noData} 
                            alt="Não há registros" 
                            btnAction="Cadastrar Investidor" />
                    )
                    : (
                        <h3>Teste</h3>
                    )
                }
            </ContentPage>
            <FloatingButton title="Adicionar Investidor" link="/Investidores/Adicionar" />
        </div>
    );
}


export default Investidores;