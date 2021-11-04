import cors from 'cors'
import express, { query, Request, Response } from 'express'
import { listaOcorrencias } from './data'
import { ocorrencia } from './types'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("server rodando na porta 3003")
})

app.get('/ocorrencias', (req: Request, res: Response) => {
    if (listaOcorrencias) {
        res.status(200).send(listaOcorrencias)
    } else {
        res.status(400).send("Ocorreu um erro")
    }
})

// Endpoint 3 - Busca com params e query

app.get('/ocorrencias/:cidade', (req, res) => {
    const cidade: string = req.params.cidade
    const bairro = req.query.bairro
    try {
        let buscaCidade: ocorrencia[] = listaOcorrencias.filter((ocorrencia) => ocorrencia.cidade === cidade)
        if (bairro) { 
            buscaCidade = buscaCidade.filter((ocorrencia) => ocorrencia.bairro === bairro)
        }
        res.send(buscaCidade)
    } catch (err: any) {
        res.send(err)
    }
})

app.post("/ocorrencias", (req:Request, res:Response) => {
 
    try {
       const formulario: ocorrencia | undefined = req.body
        if(!formulario){
            res.statusCode = 400
            throw new Error ("Dados incompletos")
        }
        formulario.id = Number(new Date())
        listaOcorrencias.push(formulario)
        res.send("Ocorrência registrada com sucesso!")
    } catch (err: any) {
        res.send(err.message)
    }
})
