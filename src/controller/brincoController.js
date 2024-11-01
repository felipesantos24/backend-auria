import { Router } from "express";
import { inserirB, verB, mudarB, apagarB} from "../repository/brincoRepository.js";

const endpoints = Router()

endpoints.post('/brinco', async (req, resp) => {
    try {
        let brinco = req.body;

        let id = await inserirB(brinco);

        resp.status(201).send({
            novoId: id
        });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.get('/brinco', async (req, resp) => {
    try {
        

        let id = await verB();

        resp.status(201).send(
             id
        );
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.put('/brinco/:id', async (req, resp) => {
    try {
        let brinco = req.body;
        let id = req.params.id

         await mudarB(brinco, id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});


endpoints.delete('/brinco/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await apagarB(id);

        resp.status(201).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
          
        });
    }
});

export default endpoints;