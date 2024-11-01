import con from "./connection.js";


export  async function inserirC(colar){
    const comando = `INSERT INTO tb_colar (preco, nome, descricao, tamanho, joia) VALUES
    (?, ?, ?, ?, ?);`

    let res = await con.query(comando, [colar.preco, colar.nome, colar.descricao, colar.tamanho, colar.joia])
    let info= res[0]


    return info.insertId;
    
}

export  async function verC(){
    const comando = `select preco, nome, descricao, tamanho, joia from tb_colar
  `

    let res = await con.query(comando )
    let info= res[0]


    return info;
    
}

export  async function mudarC(colar, id){
    const comando = ` UPDATE tb_colar set preco = ?, nome = ?, descricao =?, tamanho = ?, joia = ? WHERE id_colar = ?
    `

    let res = await con.query(comando, [colar.preco, colar.nome, colar.descricao, colar.tamanho, colar.joia, id])
    let info= res[0]


    return info.affectedRows;
    
}

export  async function apagarC(id){
    const comando = `delete from tb_colar
    where id_colar = ?;
  `

    let res = await con.query(comando, [id] )
    let info= res[0]


    return info.affectedRows;
    
}