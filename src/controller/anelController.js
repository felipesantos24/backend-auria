import { Router } from "express";
import { inserirA, verA, mudarA, apagarA } from "../repository/anelRepository.js";

const endpoints = Router()

endpoints.post('/anel', async (req, resp) => {
    try {
        let anel = req.body;

        let id = await inserirA(anel);

        resp.status(201).send({
            novoId: id
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.get('/anel', async (req, resp) => {
    try {
        

        let id = await verA();

        resp.status(201).send(
          id
        );
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.put('/anel/:id', async (req, resp) => {
    try {
        let anel = req.body;
        let id = req.params.id

         await mudarA(anel, id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.delete('/anel/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await apagarA(id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});

export default endpoints;