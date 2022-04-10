module.exports.home = ( app, res ) => {
    let connection = app.config.dbConnection();
    let noticiaModel = new app.app.models.NoticiasModel;

    noticiaModel.getLastFiveNews(connection, ( error, result ) => {
        res.render("session/home", { noticias : result } );
    })
}