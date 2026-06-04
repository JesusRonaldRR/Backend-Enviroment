const pool = require('../config/db');

const buscarUsuarioPorCorreo = async (correo) => {
    const rsultado = await pool.query(
        'SELECT * FROM usuarios WHERE correo = $1',
        [correo]
    );

    return resultado.rows[0]
};

module.exports = {
    buscarUsuarioPorCorreo
}