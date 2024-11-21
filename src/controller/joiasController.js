import * as db from '../repository/joiasRepository.js'

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/joias', async (req, resp) => {
    try {
        let registros = await db.consultarJoias ();
        resp.send (registros); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Joias/', async (req, resp) => {
    try {
        let nome = req.body; 

        let id = await db.inserirPacientes (nome); 

        resp.send({
            novoId: id 
        })
    }
    catch (err){
        resp.status (400).send ({
            erro:err.message
        })
    }
})


endpoints.put ('/joias/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let nome = req.body; 

        let linhasAfetadas = await db.alterarJoias(id, nome); 
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status(404).send({erro: 'Nenhuma joia encontrada'})
        }
    }
    catch (err){
        req.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete ('/joias/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerJoias (id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})




export default endpoints;