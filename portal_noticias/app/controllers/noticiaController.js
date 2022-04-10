module.exports.noticias = ( app, req, res ) => {
    let connection = app.config.dbConnection();
    let noticiaModel = new app.app.models.NoticiasModel;
    
    noticiaModel.getNoticias(connection, ( error, result ) => {
        res.render("session/noticias", { noticias : result });
    });
}

module.exports.noticia = ( app, req, res ) => {
    let connection = app.config.dbConnection();
    let noticiaModel = new app.app.models.NoticiasModel;

    noticiaModel.getNoticia( req.params.id ,connection, ( error, result  ) => {
        res.render("session/noticia", { noticia : result[0] });
    });
}