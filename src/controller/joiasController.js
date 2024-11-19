import { autenticar } from '../utils/jwt.js';
import * as db from '../repository/joiasRepository.js';
import { Router } from "express";

const endpoints = Router();
endpoints.get('/joias', autenticar, async (req, resp) => {
    try {
        let idUsuario = req.user.id;
        let registros = await db.consultarJoias(idUsuario);
        resp.send(registros);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoints.get('/joias/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarJoiaPorId(id); 
        if (registros.length > 0) {
            resp.send(registros[0]);
        } else {
            resp.status(404).send({ erro: 'Joia não encontrada' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoints.post('/joias', autenticar, async (req, resp) => {
    try {
        let joia = req.body;
        joia.idUsuario = req.user.id;

        let id = await db.inserirJoia(joia);
        resp.send({ novoId: id });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoints.put('/joias/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let joia = req.body;

        let linhasAfetadas = await db.alterarJoia(id, joia); 
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhuma joia encontrada' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoints.delete('/joias/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerJoia(id); 
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhuma joia encontrada' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoints;