module.exports = (app) => {
    app.get('/', ( req, res ) => {
        app.app.controllers.indexController.homePage(app, req, res);
    });
}