module.exports = ( app ) => {
    app.get('/bikes', ( request, response ) => {
        response.render("session/bikes");
    });
}