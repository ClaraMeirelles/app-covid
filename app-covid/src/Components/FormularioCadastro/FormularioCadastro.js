import { useForm, onChangeForm, clearInputs } from "../../hooks/useForm";
import { Formulario } from "./styled";

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
        tosse:"",
        uti:"",
        dorGarganta:"",
    });

    const enviarDados = (e) => {
        e.preventDefault();
        console.log(form)
        // axios
        //   .post(`${BASE_URL}/signup`, form)
        //   .then((response) => {
        //     localStorage.setItem("token", response.data.token);
        //     clearInputs();
        //     goToAddressPage(history);
        //   })
        //   .catch((err) => {
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Oops...',
        //       text: (err.response.data.message),
        //     })
        //   });
      };
    return (
        <Formulario onSubmit={enviarDados}>
            <div>
                <label for="dataNotificacao">Data da notificação</label>
                <input name={"dataNotificacao"} type="date" value={form.dataNotificacao} onChange={onChangeForm} required />
                <label for="dataPrimeirosSintomas">Data dos primeiros sintomas</label>
                <input name={"dataPrimeirosSintomas"} type="date" value={form.dataPrimeirosSintomas} onChange={onChangeForm} required />
                <label for="dataTeste">Data do teste</label>
                <input name={"dataTeste"} type="date" value={form.dataTeste} onChange={onChangeForm} required />
                <label for="dataObito">Data do óbito</label>
                <input name={"dataObito"} type="date" value={form.dataObito} onChange={onChangeForm} />
                <label for="dataNascimento">Data do teste</label>
                <input name={"dataNascimento"} type='date' value={form.dataNascimento} onChange={onChangeForm} required />
                <label for="faixaEtaria">Faixa Etária</label>
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
                <label for="genero" onChange={onChangeForm} required>Gênero</label>
                <section>
                    <input name="genero" type='checkbox' value="Masculino" onChange={onChangeForm}  /> Masculino
                    <input name="genero" type='checkbox' value="Feminino" onChange={onChangeForm}  /> Feminino
                    <input name="genero" type='checkbox' value="outro" onChange={onChangeForm}  /> Outros
                </section>
                <label for="etnia">Etnia</label>
                <input name="etnia" value={form.etnia} onChange={onChangeForm} required />
            </div>
            <label for="bairro">Bairro</label>
            <input name="bairro" value={form.bairro} onChange={onChangeForm} required />
            <label for="cidade">Data do teste</label>
            <input name="cidade" value={form.cidade} onChange={onChangeForm} required />
            <label for="centroDeSaude">Centro de Saúde</label>
            <input name="centroDeSaude" value={form.centroDeSaude} onChange={onChangeForm} required />
            <label for="tipoTeste">Data do teste</label>
            <select name="tipoTeste" value={form.tipoTeste} >
                <option value="RT-PCR">RT-PCR</option>
                <option value="Sorológico" >Sorológico</option>
                <option value="teste rápido" >Teste Rápido</option>
            </select>
            <label >Sintomas: </label>
            <section>
                <input name="dorGarganta" type='checkbox' value="Sim" onChange={onChangeForm}  /> Dor de Garganta
            </section>
            <section>
                <input name="dispneia" type='checkbox' value="Sim" onChange={onChangeForm}  /> Dispnéia
            </section>
            <section>
                <input name="febre" type='checkbox' value="Sim" onChange={onChangeForm}  /> Febre
            </section>
            <section>
                <input name="tosse" type='checkbox' value="Sim" onChange={onChangeForm}  /> Tosse
            </section>
            <label >internação: </label>
            <section>
                <input name="uti" type='checkbox' value="Sim" onChange={onChangeForm}  /> UTI
            </section>
            <button>Enviar</button>
        </Formulario>
    )
}


