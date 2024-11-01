import { Router } from "express";
import { inserirP, verP, mudarP, apagarP} from "../repository/pulseiraRepository.js";

const endpoints = Router()

endpoints.post('/pulseira', async (req, resp) => {
    try {
        let pulseira = req.body;

        let id = await inserirP(pulseira);

        resp.status(201).send({
            novoId: id
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.get('/pulseira', async (req, resp) => {
    try {
        

        let id = await verP();

        resp.status(201).send(
          id
        );
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.put('/pulseira/:id', async (req, resp) => {
    try {
        let pulseira = req.body;
        let id = req.params.id

         await mudarP(pulseira, id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.delete('/pulseira/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await apagarP(id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});

export default endpoints;