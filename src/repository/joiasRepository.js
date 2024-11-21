import con from './connection.js'; 

export async function inserirInf (informacoes) {
    const comando = `
    insert into Agendas (nome, descricao, tamanho, valor, joia)
                        values (?, ?, ?, ?, ?)`
                        ; 

    let resposta = await con.query (comando, [informacoes.nome, informacoes.descricao, informacoes.tamanho, informacoes.valor, informacoes.joia])
    let info = resposta [0]; 

    return info.inserId; 
}

export async function consultarJoia(){
    const comando = `
        select ID                           ID, 
        nome                                nome,
        descricao                           text,
        tamanho                             tamanho,
        valor                               preco,
        joia                                descricao
        from Agendas`;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarInf(id, informacoes){
    const comando = `

    update joia set
            nome = ?,
            descricao = ?, 
            tamanho = ?, 
            valor = ?, 
            joia = ?
        where ID = ?`; 
    

    let resposta = await con.query ((comando), [informacoes.nome, informacoes.descricao, informacoes.tamanho, informacoes.valor, informacoes.joia, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removeragendas (id){
    const comando = `
    delete from joia
    where ID = ? `;



    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}