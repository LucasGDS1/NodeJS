module.exports = ( app ) => {
    app.get('/', ( request, response ) => {
        app.app.controllers.homeController.home(app, response);
    });
}

