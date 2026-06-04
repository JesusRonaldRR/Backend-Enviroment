const bcrypt = require('bcrypt');

const {
    buscarUsuarioPorCorreo
} = require('../models/usuarioModel');

const login = async (req, res) => {
    try {
        const { correo, password } = req.body;

        const usuario = await buscarUsuarioPorCorreo(correo);

        if (!usuario) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        const coincide = await bcrypt.compare(
            password,
            usuario,password
        );

        if (!coincide){

            return res.status(401).json({
                mensaje: 'Contrasela incorrecta'
            });
        }

        res.json({
            mensaje: 'Login correceto'
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'Error del servidor'
        });
    }
};

module.exports = {
    login
};