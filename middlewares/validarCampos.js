const validarCampos = (req, res, next) =>{
    const {correo, password} = req.body;

    if(!correo || !password){
        return  res.status(400).json({
            mensaje: 'Complete todos los campos'
        });
    }
}