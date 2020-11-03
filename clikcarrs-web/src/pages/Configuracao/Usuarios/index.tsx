import React, { useEffect, useState } from 'react';
import ContentPage from '../../../components/ContentPage';
import EmptyMessage from '../../../components/EmptyMessage';
import FloatingButton from '../../../components/FloatingButton';
import MainMenu from '../../../components/MainMenu';
import { FaWhatsapp } from 'react-icons/fa';

import noData from '../../../assets/images/no_data.png';

import './styles.css';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

interface Usuario {
    id: number;
    name: string;
    avatar: string;
    celular: string;
    telefone: string;
    email: string;
    cpf: string;
    rg: string;
    isWhatsapp: boolean;
    dtNascimento: Date;
    isActive: boolean;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
}

function Usuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    async function loadUsers() {
        const response = await api.get("/usuarios");
        setUsuarios(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, [])

    async function handleDeleteRegister(id:number){
        const result = window.confirm("Confirma a exclusão deste registro?");
        console.log(result);
        if(result){
             const r = await api.delete(`usuarios/${id}`);
             loadUsers();
        }
    }

    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage links={[
                { linkTo: "/Configuracao", linkTitle: "Geral" },
                { linkTo: "/Configuracao/Usuarios", linkTitle: "Usuários" },
            ]}
                title="Usuários"
            >
                {usuarios.length === 0
                    ? (
                        <EmptyMessage
                            label="Não há usuários cadastrados"
                            linkTo="/Configuracao/Usuarios/Adicionar"
                            src={noData}
                            alt="Não há registros"
                            btnAction="Cadastrar usuário" />
                    )
                    : (
                        usuarios.map(usuario => {
                            return (
                                <div key={usuario.id} className="user-container">
                                    <div className="user-photo">
                                        <img src={usuario.avatar} alt={usuario.name} />
                                    </div>
                                    <div className="user-data">
                                        <div className="user-data-container">
                                            <div className="name">
                                                {usuario.name}
                                                {
                                                    usuario.isActive ?
                                                        (
                                                            <div className="status active">
                                                                Ativo
                                                            </div>
                                                        ) :
                                                        (

                                                            <div className="status inactive">
                                                                Inativo
                                                            </div>
                                                        )
                                                }
                                            </div>
                                            <div className="address">

                                                {usuario.logradouro},
                                             n° {usuario.numero},
                                             Bairro {usuario.bairro},<br />
                                                {usuario.cidade}-{usuario.uf}

                                            </div>
                                            <div className="contact">
                                                <div className="contact-group">
                                                    <div className="title">
                                                        Telefone:
                                                    </div>
                                                    <div className="contact-data">
                                                        <div className="text-contact">
                                                            <a href={`tel:${usuario.telefone.replace(/[^0-9,.]+/g, "")}`}>
                                                                {usuario.telefone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-group">
                                                    <div className="title">
                                                        Celular:
                                                    </div>
                                                    <div className="contact-data">
                                                        <div className="text-contact">
                                                            <a href={`tel:${usuario.celular.replace(/[^0-9,.]+/g, "")}`}>
                                                                {usuario.celular}
                                                            </a>
                                                        </div>
                                                        {
                                                            usuario.isWhatsapp && (
                                                                <div className="icon-contact">
                                                                    <a href={`https://wa.me/55${usuario.celular.replace(/[^0-9,.]+/g, "")}`}>
                                                                        <FaWhatsapp size={18} />
                                                                    </a>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="birthday">
                                                <div className="title">
                                                    Data de nascimento:
                                                </div>
                                                <div className="birthday-data">
                                                    11/01/2020
                                                </div>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <Link to={`/Configuracao/Usuarios/Editar/${usuario.id}`} className="btn sm success w-100 m-2 td-n">Editar</Link>
                                            <Link to={`/Configuracao/Usuarios/Visualizar/${usuario.id}`} className="btn sm info w-100 m-2 td-n">Visualizar</Link>
                                            <button onClick={() => {handleDeleteRegister(usuario.id)}} className="btn sm danger w-100 m-2 td-n">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )
                }
            </ContentPage>
            <FloatingButton title="Adicionar Usuário" link="/Configuracao/Usuarios/Adicionar" />
        </div>
    );
}


export default Usuarios;