import con from "./connection.js";


export  async function inserirB(brinco){
    const comando = `INSERT INTO tb_brinco (preco, nome, descricao, tamanho, joia) VALUES
    (?, ?, ?, ?, ?);`

    let res = await con.query(comando, [brinco.preco, brinco.nome, brinco.descricao, brinco.tamanho, brinco.joia])
    let info= res[0]


    return info.insertId;
    
}

export  async function verB(){
    const comando = `select preco, nome, descricao, tamanho, joia from tb_brinco
  `

    let [res] = await con.query(comando )
    let info= res[0]


    return info;
    
}

export  async function mudarB(brinco, id){
    const comando = ` UPDATE tb_brinco set preco = ?, nome = ?, descricao =?, tamanho = ?, joia = ? WHERE id_brinco = ?
    `

    let res = await con.query(comando, [brinco.preco, brinco.nome, brinco.descricao, brinco.tamanho, brinco.joia, id])
    let info= res[0]


    return info.affectedRows;
    
}

export  async function apagarB(id){
    const comando = `delete from tb_brinco
    where id_brinco = ?;
  `

    let res = await con.query(comando, [id] )
    let info= res[0]


    return info.affectedRows;
    
}