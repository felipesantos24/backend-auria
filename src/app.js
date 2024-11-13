import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'


import  adicionarRotas from './rotas.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(express.json({ limit: '10mb' }));
adicionarRotas(servidor);

servidor.listen(process.env.PORTA, () =>  console.log(`--> API subiu na porta ${process.env.PORTA}`));  