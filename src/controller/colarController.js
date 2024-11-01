import { Router } from "express";
import { inserirC, verC, mudarC, apagarC} from "../repository/colarRepository.js";

const endpoints = Router()

endpoints.post('/colar', async (req, resp) => {
    try {
        let colar = req.body;

        let id = await inserirC(colar);

        resp.status(201).send({
            novoId: id
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.get('/colar', async (req, resp) => {
    try {
        

        let id = await verC();

        resp.status(201).send(
           id
        );
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.put('/colar/:id', async (req, resp) => {
    try {
        let colar = req.body;
        let id = req.params.id

         await mudarC(colar, id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.delete('/colar/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await apagarC(id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});

export default endpoints;