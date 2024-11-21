

import con from "./connection.js";


export async function inserirListaNegra(pessoa) {
    const comando = `
        insert into tb_lista_negra (nm_pessoa, nrm_pessoa, email_pessoa, endereco, nm_produtos) 
                            values (?, ?, ?, ?, ?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nome, pessoa.pessoa, pessoa.email, pessoa.endereco, pessoa.produtos])
    let info = resposta[0];
    
    return info.insertId;
}


export async function consultarListaNegra() {
    const comando = `
        select id_pedido   id,
               nm_pessoa        nome,
               nrm_pessoa       numero,
               email_pessoa     email,
               endereco         endereco,
               nm_produtos         produto
           
          from tb_lista_negra
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function removerListaNegra(id) {
    const comando = `
        delete from tb_lista_negra 
         where id_pedido = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}