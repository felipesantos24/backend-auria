import con from "./connection.js";

export async function validarUsuario(pessoa) {
    const comando = `
        select 
            idusuario id,
            nome nome
        from tb_usuario 
        where 
            nome = ?
            and senha = ?
    `;
    
    let registros = await con.query(comando, [pessoa.nome, pessoa.senha])
    return registros[0][0];
}