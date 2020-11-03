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

    function setMessageError(msg: string, id: string) {

        const error = document.getElementById(id);

        if (error) error.innerHTML = msg;

        error?.classList.remove("hidden");

        setTimeout(() => {
            error?.classList.add("hidden");
        },
            3000);

    }
    function validaCampos(id: string) {
        let error = "";

        if(id === 'fieldset-1-error'){
            if (Nome == "") {
                error = "Nome não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Email == "") {
                error = "Email não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Cpf == "") {
                error = "Cpf não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Cpf.length < 14) {
                error = "Cpf incompleto!";
                return setMessageError(error, id);
            }
    
            if (Rg == "") {
                error = "Rg não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Telefone == "") {
                error = "Telefone não pode ser vazio!";
                return setMessageError(error, id);
            }
        }

        if(id === 'fieldset-2-error'){
            if (Logradouro == "") {
                error = "Logradouro não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Numero == "") {
                error = "Numero não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Bairro == "") {
                error = "Bairro não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Cidade == "") {
                error = "Cidade não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Uf == "") {
                error = "Estado não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Cep == "") {
                error = "Cep não pode ser vazio!";
                return setMessageError(error, id);
            }
    
            if (Cep.length < 8) {
                error = "Cep incompleto!";
                return setMessageError(error, id);
            }
        }

        if(id === 'fieldset-3-error'){
    
            if ((FotoAvatar === null)||(FotoAvatar === undefined)) {
                error = "Foto de usuário não enviado!";
                return setMessageError(error, id);
            }
        }
        

        return 0;
    }
    function btn1Next() {

        if (validaCampos('fieldset-1-error') === 0) {
            document.getElementById("fieldset-1")?.classList.add("invisible");
            document.getElementById("fieldset-2")?.classList.remove("invisible");

            document.getElementById("section-2")?.classList.add("active");
        }

    }
    function btn2Prev() {

        document.getElementById("fieldset-1")?.classList.remove("invisible");
        document.getElementById("fieldset-2")?.classList.add("invisible");

        document.getElementById("section-2")?.classList.remove("active");

    }
    function btn2Next() {

        if (validaCampos('fieldset-2-error') === 0) {
            document.getElementById("fieldset-2")?.classList.add("invisible");
            document.getElementById("fieldset-3")?.classList.remove("invisible");

            document.getElementById("section-3")?.classList.add("active");
        }
    }
    function btn3Prev() {
        document.getElementById("fieldset-2")?.classList.remove("invisible");
        document.getElementById("fieldset-3")?.classList.add("invisible");

        document.getElementById("section-3")?.classList.remove("active");
    }

    async function enviarForm(e: FormEvent) {
        e.preventDefault();

        if(validaCampos('fieldset-3-error') !== 0) return;

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
                    <div className="sections">
                        <div id="section-1" className="item-section active">
                            <FaRegUser size={24} />
                        </div>
                        <div id="section-2" className="item-section">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <div id="section-3" className="item-section">
                            <FaRegAddressCard size={24} />
                        </div>
                    </div>
                    <div className="fieldset-group">
                        <form onSubmit={enviarForm}>

                            <fieldset id="fieldset-1" className="visible">
                                <legend>Dados do usuário</legend>
                                <span id="fieldset-1-error" className="error hidden"></span>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="nome"
                                        label="Nome do usuário"
                                        value={Nome}
                                        onChange={(e) => { setNome(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cpf-cnpj"
                                        label="CPF"
                                        mask="cpf"
                                        value={Cpf}
                                        onChange={(e) => { setCpf(e.target.value) }}

                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="email"
                                        label="Email"
                                        value={Email}
                                        onChange={(e) => { setEmail(e.target.value) }}

                                    />
                                    <Input
                                        required
                                        name="rg"
                                        label="RG"
                                        mask="rg"
                                        value={Rg}
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
                                        onChange={(e) => { setTelefone(e.target.value) }}

                                    />
                                    <div className="input-group">

                                        <Input
                                            name="celular"
                                            label="Celular"
                                            mask="celular"
                                            value={Celular}
                                            onChange={(e) => { setCelular(e.target.value) }}

                                        />
                                        <InputCheckbox
                                            name="whatsapp"
                                            label="É Whatsapp?"
                                            checked={IsWhatsapp}
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
                                        onChange={(e) => { setPassword(e.target.value) }}

                                    />
                                    <Input
                                        name="confirma-senha"
                                        label="Confirmar Senha"
                                        type="password"
                                        value={ConfirmPassword}
                                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    />
                                </div>

                                <Input
                                    name="dtNascimento"
                                    type="date"
                                    label="Data de Nascimento"
                                    value={dtNascimento}
                                    onChange={(e) => { setdtNascimento(e.target.value) }}

                                />

                                <div className="button-group">
                                    <button type="button" onClick={btn1Next} className="btn success">Próximo</button>
                                </div>
                            </fieldset>

                            <fieldset id="fieldset-2" className="invisible">
                                <legend>Endereço do usuário</legend>
                                <span id="fieldset-2-error" className="error hidden"></span>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="logradouro"
                                        label="Logradouro"
                                        value={Logradouro}
                                        onChange={(e) => { setLogradouro(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="numero"
                                        label="N°"
                                        value={Numero}
                                        onChange={(e) => { setNumero(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="bairro"
                                        label="Bairro"
                                        value={Bairro}
                                        onChange={(e) => { setBairro(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cidade"
                                        label="Cidade"
                                        value={Cidade}
                                        onChange={(e) => { setCidade(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="uf"
                                        label="Estado"
                                        value={Uf}
                                        onChange={(e) => { setUf(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cep"
                                        label="CEP"
                                        mask="cep"
                                        value={Cep}
                                        onChange={(e) => { setCep(e.target.value) }}
                                    />
                                </div>
                                <div className="button-group">
                                    <button type="button" onClick={btn2Prev} className="btn danger">Anterior</button>
                                    <button type="button" onClick={btn2Next} className="btn success">Próximo</button>
                                </div>
                            </fieldset>

                            <fieldset id="fieldset-3" className="invisible">
                                <legend>Itentificação do usuário</legend>
                                <span id="fieldset-3-error" className="error hidden"></span>

                                <InputUpload
                                    required
                                    name="foto-usuario"
                                    label="Foto do usuário"
                                    setFileData={setFotoAvatar}
                                />

                                <div className="button-group">
                                    <button type="button" onClick={btn3Prev} className="btn danger">Anterior</button>
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