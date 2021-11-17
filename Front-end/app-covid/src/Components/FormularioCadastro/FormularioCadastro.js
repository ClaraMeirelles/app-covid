import { useForm, onChangeForm, clearInputs } from "../../hooks/useForm";
import FromularioCadastro from './FormularioCadastro.css'
import { BASE_URL } from "../../Utils/BASE_URL";
import { Formulario } from "./styled";
import axios from 'axios'
export default function FormularioCadastro() {
    const { form, onChangeForm, clearInputs } = useForm({
        dataNotificacao: "",
        dataPrimeirosSintomas: "",
        dataTeste: "",
        dataObito: "",
        dataNascimento: "",
        faixaEtaria: "",
        etnia: "",
        bairro: "",
        cidade: "",
        centroDeSaude: "",
        tipoTeste: "",
        genero: "",
        dispneia: "",
        febre: "",
        tosse: "",
        uti: "",
        dorGarganta: "",
    });

    const enviarDados = (e) => {
        e.preventDefault();
        console.log(form)
        axios
            .post(`${BASE_URL}/ocorrencias`, form)
            .then((response) => {
                console.log(response)
                clearInputs();
            })
            .catch((err) => {
                // Swal.fire({
                //   icon: 'error',
                //   title: 'Oops...',
                //   text: (err.response.data.message),
                // })
                console.log(err)
            });
    };
    return (
        <Formulario onSubmit={enviarDados} className="forms-covid">
            <div className="container-date">
                <div>
                    <p>Data da notificação</p>
                    <input name={"dataNotificacao"} type="date" value={form.dataNotificacao} onChange={onChangeForm} required />
                </div>
                <div>
                    <p >Primeiros sintomas</p>
                    <input name={"dataPrimeirosSintomas"} type="date" value={form.dataPrimeirosSintomas} onChange={onChangeForm} required />
                </div>
                <div>
                    <p >Data do teste</p>
                    <input name={"dataTeste"} type="date" value={form.dataTeste} onChange={onChangeForm} required />
                </div>
                <div>
                    <p>Data de nascimento</p>
                    <input name={"dataNascimento"} type='date' value={form.dataNascimento} onChange={onChangeForm} required />
                </div>
                <div>
                    <p>Data do óbito</p>
                    <input name={"dataObito"} type="date" value={form.dataObito} onChange={onChangeForm} />
                </div>
                <div>
                    <p>Faixa Etária</p>
                    <select name={"faixaEtaria"} value={form.faixaEtaria} onChange={onChangeForm} required>
                        <option value=""></option>
                        <option value="0 a 9 anos">0 a 9 anos</option>
                        <option value="10 a 19 anos">10 a 19 anos</option>
                        <option value="20 a 29 anos">20 a 29 anos</option>
                        <option value="30 a 39 anos">30 a 39 anos</option>
                        <option value="40 a 49 anos">40 a 49 anos</option>
                        <option value="50 a 59 anos">50 a 59 anos</option>
                        <option value="60 a 69 anos">60 a 69 anos</option>
                        <option value="70 a 79 anos">70 a 79 anos</option>
                        <option value="80 a 89 anos">80 a 89 anos</option>
                        <option value="90 a 99 anos">90 a 99 anos</option>
                        <option value="+ 99 anos">+ 99 anos</option>
                    </select>
                </div>
                <div>
                    <p>Gênero</p>
                    <section className="genero-forms">
                        <div><input name="genero" type='checkbox' value="Masculino" onChange={onChangeForm} /> Masculino</div>
                        <div><input name="genero" type='checkbox' value="Feminino" onChange={onChangeForm} /> Feminino</div>
                        <div><input name="genero" type='checkbox' value="outro" onChange={onChangeForm} /> Outros</div>
                    </section>
                </div>
                <div>
                    <p>Etnia</p>
                    <input name="etnia" value={form.etnia} onChange={onChangeForm} required />
                </div>
            </div>
            <div className="container-city">
                <div>
                    <p>Bairro</p>
                    <input name="bairro" value={form.bairro} onChange={onChangeForm} required />
                </div>
                <div>
                    <p>Cidade</p>
                    <input name="cidade" value={form.cidade} onChange={onChangeForm} required />
                </div>
                <div>
                    <p>Centro de Saúde</p>
                    <input name="centroDeSaude" value={form.centroDeSaude} onChange={onChangeForm} required />
                </div>
                <div>
                    <p>Data do teste</p>
                    <select name="tipoTeste" value={form.tipoTeste} >
                        <option value="RT-PCR">RT-PCR</option>
                        <option value="Sorológico" >Sorológico</option>
                        <option value="teste rápido" >Teste Rápido</option>
                    </select>
                </div>
            </div>
            <div className="container-symptoms">
                <p>Sintomas: </p>
                <section>
                    <input name="dorGarganta" type='checkbox' value="Sim" onChange={onChangeForm} /> Dor de Garganta
                </section>
                <section>
                    <input name="dispneia" type='checkbox' value="Sim" onChange={onChangeForm} /> Dispnéia
                </section>
                <section>
                    <input name="febre" type='checkbox' value="Sim" onChange={onChangeForm} /> Febre
                </section>
                <section>
                    <input name="tosse" type='checkbox' value="Sim" onChange={onChangeForm} /> Tosse
                </section>
            </div>
            <div className="contairner-inter">
                <p>Internação: </p>
                <section>
                    <input name="uti" type='checkbox' value="Sim" onChange={onChangeForm} /> UTI
                </section>
            </div>
            <button className="send-covid">Enviar</button>
        </Formulario>
    )
}


