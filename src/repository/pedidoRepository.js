import con from "./connection.js";


export async function inserirJoias (Joias) {
    const comando = `
    insert into joias (nm_pessoa, nrm_telefone, email_pessoa, endereco, nm_produtos)
                        values (?, ?, ?, ?, ?) `
    ; 

    let resposta = await con.query (comando, [Joias.nm_pessoa, Joias.nrm_telefone, Joias.email_pessoa, Joias.endereco, Joias.nm_produtos])
    let info = resposta [0]; 

    return info.inserId; 
}


export async function ConsultarJoias(){
    const comando = `
    select  id_peido                id,
            nm_pessoa               nome,
            nrm_telefone            telefone,
            email_pessoa            email,
            endereco                endereco,
            nm_produtos             produtos
        from joias `
    ;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function RemoverJoias(id) {
    const comando = `
        delete from joias 
         where id_peido = ? `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}