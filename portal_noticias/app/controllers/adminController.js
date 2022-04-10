module.exports.formulario_inclusao_noticia = (app, res) => {
    res.render("admin/form_add_noticia", { validation : [], noticia : {} });
}

module.exports.noticia_salvar = (app, req, res) => {

    let noticia = req.body;
    let connection = app.config.dbConnection();
    let noticiaModel = new app.app.models.NoticiasModel;

    req.assert("titulo", "Título é um campo obrigatório").notEmpty();
    req.assert("resumo", "Resumo é um campo obrigatório").notEmpty();
    req.assert("resumo", "Resumo deve ter entre 10 e 100 caracteres").len(10,100);
    req.assert("autor", "Autor é um campo obrigatório").notEmpty();
    req.assert("data_noticia", "Data da notícia é um campo obrigatório").notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert("noticia", "Notícia é um campo obrigatório").notEmpty();

    if( req.validationErrors() ) {
        res.render("admin/form_add_noticia", {validation : req.validationErrors(), noticia : noticia });
        return;
    }

    noticiaModel.saveNews(noticia, connection, (error, result ) => {
        res.redirect("/noticias");
    });
}