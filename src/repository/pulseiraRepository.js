import con from "./connection.js";


export  async function inserirP(pulseira){
    const comando = `INSERT INTO tb_pulseira (preco, nome, descricao, tamanho, joia) VALUES
    (?, ?, ?, ?, ?);`

    let res = await con.query(comando, [pulseira.preco, pulseira.nome, pulseira.descricao, pulseira.tamanho, pulseira.joia])
    let info= res[0]


    return info.insertId;
    
}

export  async function verP(){
    const comando = `select preco, nome, descricao, tamanho, joia from tb_pulseira
  `

    let res = await con.query(comando )
    let info= res[0]


    return info;
    
}

export  async function mudarP(pulseira, id){
    const comando = ` UPDATE tb_pulseira set preco = ?, nome = ?, descricao =?, tamanho = ?, joia = ? WHERE id_pulseira = ?
    `

    let res = await con.query(comando, [pulseira.preco, pulseira.nome, pulseira.descricao, pulseira.tamanho, pulseira.joia, id])
    let info= res[0]


    return info.affectedRows;
    
}

export  async function apagarP(id){
    const comando = `delete from tb_pulseira
    where id_pulseira = ?;
  `

    let res = await con.query(comando, [id] )
    let info= res[0]


    return info.affectedRows;
    
}