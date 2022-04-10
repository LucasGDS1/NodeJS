module.exports = ( app ) => {
    app.get('/noticias', ( request, response ) => {
        app.app.controllers.noticiaController.noticias(app, request, response);
    });

    app.get('/noticia/:id', ( request, response ) => {
        app.app.controllers.noticiaController.noticia(app, request, response);
    });
}