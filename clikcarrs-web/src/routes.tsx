import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import PaginaPrincipal from './pages/PaginaPrincipal';
import Contratos from './pages/Contratos';
import Investidores from './pages/Investidores';
import Motoristas from './pages/Motoristas';
import Financeiro from './pages/Financeiro';
import Veiculos from './pages/Veiculos';
import Locacao from './pages/Locacao';
import Configuracao from './pages/Configuracao';
import Usuarios from './pages/Configuracao/Usuarios';
import AddUsuario from './pages/Configuracao/Usuarios/Adicionar';
import AddInvestidor from './pages/Investidores/AddInvestidor';
import EditInvestidor from './pages/Investidores/EditInvestidor';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Inicio" exact component={PaginaPrincipal} />
                <Route path="/Contratos" exact component={Contratos} />
                <Route path="/Investidores" exact component={Investidores} />
                <Route path="/Investidores/Adicionar" exact component={AddInvestidor} />
                <Route path="/Investidores/Editar/:id" component={EditInvestidor} />
                <Route path="/Motoristas" component={Motoristas} />
                <Route path="/Financeiro" component={Financeiro} />
                <Route path="/Veiculos" component={Veiculos} />
                <Route path="/Locacao" component={Locacao} />
                <Route path="/Configuracao" exact component={Configuracao} />
                <Route path="/Configuracao/Usuarios" exact component={Usuarios} />
                <Route path="/Configuracao/Usuarios/Adicionar" exact component={AddUsuario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;