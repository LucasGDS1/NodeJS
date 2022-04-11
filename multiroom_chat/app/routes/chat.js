module.exports = (app) => {

    app.post('/chat', (req, res) => {
        app.app.controllers.chatController.iniciaChat(app, req, res);
    });

    app.get('/chat', (req, res) => {
        app.app.controllers.chatController.iniciaChat(app, req, res);
    });
}