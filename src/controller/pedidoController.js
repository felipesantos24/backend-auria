import * as db from "../repository/pedidoRepository.js"; 

import { Router } from "express";
const endpoints = Router ();

endpoints.get ('/Consultar/', async (req, resp) => {
    try {
        let registros = await db.ConsultarJoias(); 
        resp.send (registros);
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Inserir/', async (req, resp) => {
    try {
        let consultas = req.body; 

        let id = await db.inserirJoias(consultas);

        resp.send ({
            novoId: id
        })
    }
    catch (err){
        resp.status (400).send ({
            erro: err.message
        })
    }
})

endpoints.delete ('Remover/:id', async (req, resp) => {
    try{
        let id= req.params.id;

        let linhasAfetadas = await db.removerJoias (id); 
        if(linhasAfetadas >= 1){
            resp.send (); 
        }
        else {
           resp.status (404).send ({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
}) 


export default endpoints;