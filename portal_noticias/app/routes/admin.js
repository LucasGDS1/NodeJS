module.exports = ( app ) => {
    app.get("/formulario-inclusao-noticia", ( req, res ) => {
        app.app.controllers.adminController.formulario_inclusao_noticia( app, res );
    });

    app.post("/noticias/salvar", ( req, res ) => {
        app.app.controllers.adminController.noticia_salvar(app, req, res);
    });
}