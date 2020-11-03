import React, { FormEvent, useEffect, useState } from 'react';
import ContentPage from '../../../../components/ContentPage';
import MainMenu from '../../../../components/MainMenu';
import { FaRegUser, FaMapMarkerAlt, FaMoneyCheckAlt, FaRegAddressCard } from 'react-icons/fa';
import './styles.css';
import Input from '../../../../components/Input';
import InputUpload from '../../../../components/InputUpload';
import InputCheckbox from '../../../../components/InputCheckbox';
import api from '../../../../services/api';
import { useHistory } from 'react-router-dom';

function AddUsuario() {
    const history = useHistory();

    const [Nome, setNome] = useState("");
    const [Cpf, setCpf] = useState("");
    const [Email, setEmail] = useState("");
    const [Rg, setRg] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Celular, setCelular] = useState("");
    const [IsWhatsapp, setIsWhatsapp] = useState(false);
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [dtNascimento, setdtNascimento] = useState("");

    const [Logradouro, setLogradouro] = useState("");
    const [Numero, setNumero] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Uf, setUf] = useState("");
    const [Cep, setCep] = useState("");

    const [FotoAvatar, setFotoAvatar] = useState<FileList | null>();

    async function enviarForm(e: FormEvent) {
        e.preventDefault();

        console.log("entrei")

        const form = new FormData();

        form.append('name', Nome)
        form.append('cpf', Cpf)
        form.append('email', Email)
        form.append('rg', Rg)
        form.append('telefone', Telefone)
        form.append('celular', Celular)
        form.append('isWhatsapp', IsWhatsapp ? "T" : "F")
        form.append('password', Password === ConfirmPassword ? Password : "")
        form.append('dtNascimento', dtNascimento)
        form.append('logradouro', Logradouro)
        form.append('numero', Numero)
        form.append('bairro', Bairro)
        form.append('cidade', Cidade)
        form.append('uf', Uf)
        form.append('cep', Cep)
        form.append('avatar', ((FotoAvatar == null) || (FotoAvatar == undefined)) ? "" : FotoAvatar[0])

        await api.post("/usuarios", form);

        alert('Usuário inserido com sucesso!');
        history.push('/Configuracao/Usuarios');
    }
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Adicionar Usuário">
                <div className="w-container">
                    <div className="fieldset-group">
                        <form onSubmit={enviarForm}>

                            <fieldset id="fieldset-1">
                                <legend>Dados do usuário</legend>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="nome"
                                        label="Nome do usuário"
                                        value={Nome}
                                        onKeyDown={(e) => { setNome(e.currentTarget.value) }}
                                        onChange={(e) => { setNome(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cpf-cnpj"
                                        label="CPF"
                                        mask="cpf"
                                        value={Cpf}
                                        onKeyDown={(e) => { setCpf(e.currentTarget.value) }}
                                        onChange={(e) => { setCpf(e.target.value) }}

                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="email"
                                        label="Email"
                                        value={Email}
                                        onKeyDown={(e) => { setEmail(e.currentTarget.value) }}
                                        onChange={(e) => { setEmail(e.target.value) }}

                                    />
                                    <Input
                                        required
                                        name="rg"
                                        label="RG"
                                        mask="rg"
                                        value={Rg}
                                        onKeyDown={(e) => { setRg(e.currentTarget.value) }}
                                        onChange={(e) => { setRg(e.target.value) }}

                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="telefone"
                                        label="Telefone"
                                        mask="telefone"
                                        value={Telefone}
                                        onKeyDown={(e) => { setTelefone(e.currentTarget.value) }}
                                        onChange={(e) => { setTelefone(e.target.value) }}

                                    />
                                    <div className="input-group">

                                        <Input
                                            name="celular"
                                            label="Celular"
                                            mask="celular"
                                            value={Celular}
                                            onKeyDown={(e) => { setCelular(e.currentTarget.value) }}
                                            onChange={(e) => { setCelular(e.target.value) }}

                                        />
                                        <InputCheckbox
                                            name="whatsapp"
                                            label="É Whatsapp?"
                                            checked={IsWhatsapp}
                                            onKeyDown={(e) => { setIsWhatsapp(e.currentTarget.checked) }}
                                            onChange={(e) => { setIsWhatsapp(e.target.checked) }}
                                        />
                                    </div>
                                </div>


                                <div className="input-group">
                                    <Input
                                        name="senha"
                                        type="password"
                                        label="Senha"
                                        value={Password}
                                        onKeyDown={(e) => { setPassword(e.currentTarget.value) }}
                                        onChange={(e) => { setPassword(e.target.value) }}

                                    />
                                    <Input
                                        name="confirma-senha"
                                        label="Confirmar Senha"
                                        type="password"
                                        value={ConfirmPassword}
                                        onKeyDown={(e) => { setConfirmPassword(e.currentTarget.value) }}
                                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    />
                                </div>

                                <Input
                                    name="dtNascimento"
                                    type="date"
                                    label="Data de Nascimento"
                                    value={dtNascimento}
                                    onKeyDown={(e) => { setdtNascimento(e.currentTarget.value) }}
                                    onChange={(e) => { setdtNascimento(e.target.value) }}

                                />
                            </fieldset>

                            <fieldset id="fieldset-2">
                                <legend>Endereço do usuário</legend>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="logradouro"
                                        label="Logradouro"
                                        value={Logradouro}
                                        onKeyDown={(e) => { setLogradouro(e.currentTarget.value) }}
                                        onChange={(e) => { setLogradouro(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="numero"
                                        label="N°"
                                        value={Numero}
                                        onKeyDown={(e) => { setNumero(e.currentTarget.value) }}
                                        onChange={(e) => { setNumero(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="bairro"
                                        label="Bairro"
                                        value={Bairro}
                                        onKeyDown={(e) => { setBairro(e.currentTarget.value) }}
                                        onChange={(e) => { setBairro(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cidade"
                                        label="Cidade"
                                        value={Cidade}
                                        onKeyDown={(e) => { setCidade(e.currentTarget.value) }}
                                        onChange={(e) => { setCidade(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="uf"
                                        label="Estado"
                                        value={Uf}
                                        onKeyDown={(e) => { setUf(e.currentTarget.value) }}
                                        onChange={(e) => { setUf(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cep"
                                        label="CEP"
                                        mask="cep"
                                        value={Cep}
                                        onKeyDown={(e) => { setCep(e.currentTarget.value) }}
                                        onChange={(e) => { setCep(e.target.value) }}
                                    />
                                </div>
                            </fieldset>

                            <fieldset id="fieldset-3">
                                <legend>Itentificação do usuário</legend>

                                <InputUpload
                                    required
                                    name="foto-usuario"
                                    label="Foto do usuário"
                                    setFileData={setFotoAvatar}
                                />

                                <div className="button-group">
                                    <button type="submit" className="btn success">Salvar</button>
                                </div>
                            </fieldset>

                        </form>
                    </div>
                </div>
            </ContentPage>
        </div>
    );
}


export default AddUsuario;