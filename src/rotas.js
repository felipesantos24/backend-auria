import pedidoController from './controller/pedidoController.js'
import loginController from './controller/loginController.js'


export default function adicionarRotas(servidor) {
    
    servidor.use(pedidoController)
    servidor.use(loginController)
}
