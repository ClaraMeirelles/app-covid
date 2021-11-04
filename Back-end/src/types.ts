// export enum CONTINENTS {
//    AFRICA = "África",
//    AMERICA = "América",
//    ASIA = "Ásia",
//    EUROPE = "Europa",
//    OCEANIA = "Oceania"
// }

export type ocorrencia = {
   id: number,
   dataNotificacao: string,
   dataPrimeirosSintomas: string,
   dataTeste: string,
   dataObito: string,
   dataNascimento: string,
   faixaEtaria: string,
   etnia: string,
   bairro: string,
   cidade: string,
   centroDeSaude: string,
   tipoTeste: string,
   genero: string,
   dispneia: boolean,
   febre: boolean,
   tosse: boolean,
   uti: boolean,
   dorGarganta: boolean,
}