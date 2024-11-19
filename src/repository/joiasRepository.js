import con from './connection.js'; 

export const consultarJoias = async (idUsuario) => {
    const query = `
        SELECT * FROM joias 
        WHERE joia = ?;
    `;
    try {
        const [resultados] = await con.execute(query, [idUsuario]);
        return resultados;
    } catch (err) {
        throw new Error('Erro ao consultar as joias: ' + err.message);
    }
};

export const consultarJoiaPorId = async (id) => {
    const query = `
        SELECT * FROM joias 
        WHERE id = ?;
    `;
    try {
        const [resultados] = await con.execute(query, [id]);
        return resultados;
    } catch (err) {
        throw new Error('Erro ao consultar a joia: ' + err.message);
    }
};

export const inserirJoia = async (joia) => {
    const query = `
        INSERT INTO joias (nome, descricao, tamanho ,valor, joia)
        VALUES (?, ?, ?, ?, ?);
    `;
    try {
        const [resultado] = await con.execute(query, [
            joia.idUsuario,
            joia.nome,
            joia.descricao,
            joia.material,
            joia.valor
        ]);
        return resultado.insertId;
    } catch (err) {
        throw new Error('Erro ao inserir joia: ' + err.message);
    }
};

export const alterarJoia = async (id, joia) => {
    const query = `
        UPDATE joias 
        SET nome = ?, descricao = ?, material = ?, valor = ?
        WHERE id = ?;
    `;
    try {
        const [resultado] = await con.execute(query, [
            joia.nome,
            joia.descricao,
            joia.material,
            joia.valor,
            id
        ]);
        return resultado.affectedRows;
    } catch (err) {
        throw new Error('Erro ao alterar a joia: ' + err.message);
    }
};

export const removerJoia = async (id) => {
    const query = `
        DELETE FROM joias 
        WHERE id = ?;
    `;
    try {
        const [resultado] = await con.execute(query, [id]);
        return resultado.affectedRows;
    } catch (err) {
        throw new Error('Erro ao remover a joia: ' + err.message);
    }
};
