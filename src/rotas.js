import joiasController from './controller/joiasController.js'
import loginController from './controller/loginController.js'

export default function adicionarRotas(servidor) {

    servidor.use(joiasController)
    servidor.use(loginController)
}
