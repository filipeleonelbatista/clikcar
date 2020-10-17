import React, { FormEvent, useEffect, useState } from 'react';
import ContentPage from '../../../components/ContentPage';
import MainMenu from '../../../components/MainMenu';
import { FaRegUser, FaMapMarkerAlt, FaMoneyCheckAlt, FaRegAddressCard } from 'react-icons/fa';
import './styles.css';
import Input from '../../../components/Input';
import InputUpload from '../../../components/InputUpload';
import InputCheckbox from '../../../components/InputCheckbox';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

function AddInvestidor() {
    const history = useHistory();

    const [Nome, setNome] = useState("");
    const [CpfCnpj, setCpfCnpj] = useState("");
    const [Email, setEmail] = useState("");
    const [Rg, setRg] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Celular, setCelular] = useState("");
    const [IsWhatsapp, setIsWhatsapp] = useState(false);
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const [Logradouro, setLogradouro] = useState("");
    const [Numero, setNumero] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Uf, setUf] = useState("");
    const [Cep, setCep] = useState("");

    const [NrCnh, setNrCnh] = useState("");
    const [ValidadeCnh, setValidadeCnh] = useState("");
    const [FotoCnh, setFotoCnh] = useState<FileList | null>();
    const [FotoRg, setFotoRg] = useState<FileList | null>();
    const [FotoCpf, setFotoCpf] = useState<FileList | null>();
    const [FotoComprovanteResidencia, setFotoComprovanteResidencia] = useState<FileList | null>();
    const [FotoInvestidor, setFotoInvestidor] = useState<FileList | null>();

    const [Banco, setBanco] = useState("");
    const [Agencia, setAgencia] = useState("");
    const [ContaCorrente, setContaCorrente] = useState("");
    const [CpfConta, setCpfConta] = useState("");
    const [NomeProprietarioConta, setNomeProprietarioConta] = useState("");

    function btn1Next() {
        document.getElementById("fieldset-1")?.classList.add("invisible");
        document.getElementById("fieldset-2")?.classList.remove("invisible");

        document.getElementById("section-2")?.classList.add("active");

    }
    function btn2Prev() {
        document.getElementById("fieldset-1")?.classList.remove("invisible");
        document.getElementById("fieldset-2")?.classList.add("invisible");

        document.getElementById("section-2")?.classList.remove("active");
    }
    function btn2Next() {
        document.getElementById("fieldset-2")?.classList.add("invisible");
        document.getElementById("fieldset-3")?.classList.remove("invisible");

        document.getElementById("section-3")?.classList.add("active");
    }
    function btn3Prev() {
        document.getElementById("fieldset-2")?.classList.remove("invisible");
        document.getElementById("fieldset-3")?.classList.add("invisible");

        document.getElementById("section-3")?.classList.remove("active");
    }
    function btn3Next() {
        document.getElementById("fieldset-3")?.classList.add("invisible");
        document.getElementById("fieldset-4")?.classList.remove("invisible");

        document.getElementById("section-4")?.classList.add("active");
    }
    function btn4Prev() {
        document.getElementById("fieldset-3")?.classList.remove("invisible");
        document.getElementById("fieldset-4")?.classList.add("invisible");

        document.getElementById("section-4")?.classList.remove("active");
    }
    async function enviarForm(e: FormEvent) {
        e.preventDefault();

        const form = new FormData();

        form.append('nome', Nome)
        form.append('cpfcnpj', CpfCnpj)
        form.append('email', Email)
        form.append('rg', Rg)
        form.append('telefone', Telefone)
        form.append('celular', Celular)
        form.append('iswhatsapp', IsWhatsapp ? "T" : "F")
        form.append('password', Password)
        form.append('passwordconfirm', ConfirmPassword)
        form.append('logradouro', Logradouro)
        form.append('numero', Numero)
        form.append('bairro', Bairro)
        form.append('cidade', Cidade)
        form.append('uf', Uf)
        form.append('cep', Cep)
        form.append('nrcnh', NrCnh)
        form.append('validadecnh', ValidadeCnh)
        form.append('fotocnh', ((FotoCnh === null) || (FotoCnh === undefined)) ? "" : FotoCnh[0])
        form.append('fotorg', ((FotoRg === null) || (FotoRg === undefined)) ? "" : FotoRg[0])
        form.append('fotocpf', ((FotoCpf === null) || (FotoCpf === undefined)) ? "" : FotoCpf[0])
        form.append('fotocomprovanteresidencia', ((FotoComprovanteResidencia === null) || (FotoComprovanteResidencia === undefined)) ? "" : FotoComprovanteResidencia[0])
        form.append('fotoinvestidor', ((FotoInvestidor === null) || (FotoInvestidor === undefined)) ? "" : FotoInvestidor[0])
        form.append('banco', Banco)
        form.append('agencia', Agencia)
        form.append('contacorrente', ContaCorrente)
        form.append('cpfconta', CpfConta)
        form.append('nomeconta', NomeProprietarioConta)

        await api.post("/investidor", form);

        alert('Investidor inserido com sucesso!');
        history.push('/Investidor');
    }
    return (
        <div id="page-principal">
            <MainMenu />
            <ContentPage title="Adicionar Investidor">
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
                        <div id="section-4" className="item-section">
                            <FaMoneyCheckAlt size={24} />
                        </div>
                    </div>
                    <div className="fieldset-group">
                        <form onSubmit={enviarForm}>

                            <fieldset id="fieldset-1" className="visible">
                                <legend>Dados do investidor</legend>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="nome"
                                        label="Nome do investidor"
                                        value={Nome}
                                        onChange={(e) => { setNome(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cpf-cnpj"
                                        label="CPF/CNPJ"
                                        mask="cpf-cnpj"
                                        value={CpfCnpj}
                                        onChange={(e) => { setCpfCnpj(e.target.value) }}

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
                                <div className="button-group">
                                    <button type="button" onClick={btn1Next} className="btn success">Próximo</button>
                                </div>
                            </fieldset>

                            <fieldset id="fieldset-2" className="invisible">
                                <legend>Endereço do investidor</legend>
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
                                <legend>Documentação do investidor</legend>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="nr-cnh"
                                        label="N° CNH"
                                        value={NrCnh}
                                        onChange={(e) => { setNrCnh(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        type="date"
                                        name="validade-cnh"
                                        label="Data de Validade da CNH"
                                        mask="data"
                                        value={ValidadeCnh}
                                        onChange={(e) => { setValidadeCnh(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <InputUpload
                                        required
                                        name="foto-cnh"
                                        label="Foto da CNH"
                                        setFileData={setFotoCnh}
                                    />
                                    <InputUpload
                                        required
                                        name="foto-rg"
                                        label="Foto do RG"
                                        setFileData={setFotoRg}
                                    />
                                </div>
                                <div className="input-group">
                                    <InputUpload
                                        required
                                        name="foto-cpf"
                                        label="Foto do CPF"
                                        setFileData={setFotoCpf}
                                    />
                                    <InputUpload
                                        required
                                        name="foto-comprovante-residencia"
                                        label="Foto do Comprovante de residência"
                                        setFileData={setFotoComprovanteResidencia}
                                    />
                                </div>

                                <InputUpload
                                    required
                                    name="foto-usuario"
                                    label="Foto do Investidor"
                                    setFileData={setFotoInvestidor}
                                />

                                <div className="button-group">
                                    <button type="button" onClick={btn3Prev} className="btn danger">Anterior</button>
                                    <button type="button" onClick={btn3Next} className="btn success">Próximo</button>
                                </div>
                            </fieldset>

                            <fieldset id="fieldset-4" className="invisible">
                                <legend>Dados Bancários do investidor</legend>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="banco"
                                        label="Banco"
                                        value={Banco}
                                        onChange={(e) => { setBanco(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="agencia"
                                        label="Agência"
                                        value={Agencia}
                                        onChange={(e) => { setAgencia(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="conta-corrente"
                                        label="Conta Corrente"
                                        value={ContaCorrente}
                                        onChange={(e) => { setContaCorrente(e.target.value) }}
                                    />
                                    <Input
                                        required
                                        name="cpf-banco"
                                        label="CPF da conta"
                                        mask="cpf"
                                        value={CpfConta}
                                        onChange={(e) => { setCpfConta(e.target.value) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <Input
                                        required
                                        name="proprietario-conta"
                                        label="Nome do prorietário da conta"
                                        value={NomeProprietarioConta}
                                        onChange={(e) => { setNomeProprietarioConta(e.target.value) }}
                                    />
                                </div>

                                <div className="button-group">
                                    <button type="button" onClick={btn4Prev} className="btn danger">Anterior</button>
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


export default AddInvestidor;