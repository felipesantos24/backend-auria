import con from "./connection.js";


export  async function inserirA(anel){
    const comando = `INSERT INTO tb_anel (preco, nome, descricao, tamanho, joia) VALUES
    (?, ?, ?, ?, ?);`

    let res = await con.query(comando, [anel.preco, anel.nome, anel.descricao, anel.tamanho, anel.joia])
    let info= res[0]


    return info.insertId;
    
}

export  async function verA(){
    const comando = `select preco, nome, descricao, tamanho, joia from tb_anel
  `

    let res = await con.query(comando )
    let info= res[0]


    return info;
    
}

export  async function mudarA(anel, id){
    const comando = ` UPDATE tb_anel set preco = ?, nome = ?, descricao =?, tamanho = ?, joia = ? WHERE id_anel = ?
    `

    let res = await con.query(comando, [anel.preco, anel.nome, anel.descricao, anel.tamanho, anel.joia, id])
    let info= res[0]


    return info.affectedRows;
    
}

export  async function apagarA(id){
    const comando = `delete from tb_anel
    where id_anel = ?;
  `

    let res = await con.query(comando, [id] )
    let info= res[0]


    return info.affectedRows;
    
}