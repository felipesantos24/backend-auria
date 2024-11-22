import con from "./connection.js";
import crypto from "crypto-js";

export async function validarUsuario(pessoa) {
    const comando = `
        select 
            idusuario id,
            nome nome
        from usuario 
        where 
            nome = ?
            and senha = ?
    `;
    
    
    let hash = crypto.SHA256(pessoa.senha).toString();
    let registros = await con.query(comando, [pessoa.nome, hash]);
    return registros[0][0];
}
export async function inserirAdm(adm) {
    const comando = `insert into usuario (nome,senha)
                     values(?,?);`
    let hash = crypto.SHA256(adm.senha).toString();
    let resposta = await con.query(comando, [adm.nome, hash]);
    let info = resposta[0];
    return info.insertId;
}