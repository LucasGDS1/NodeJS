module.exports.iniciaChat = (app, req, res) => {

    let dataForm = req.body;

    req.assert("apelido","O nome é um campo obrigatório").notEmpty();
    req.assert("apelido","O campo deve ter entre 5 e 15 caracteres").len(3,15);

    let validations = req.validationErrors();
    
    if(validations) {
        console.log(validations);
        res.render("index", { validation : validations });
        return;
    }

    app.get('io').emit('msgParaCliente', 
    { 
        apelido : dataForm.apelido, 
        mensagem : dataForm.apelido + " Acabou de entrar no chat!" 
    } );

    res.render("chat");
}