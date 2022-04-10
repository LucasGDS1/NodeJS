let app = require('./config/server');
let moduleMessage = require('./mod_message'); 


app.listen(3000, function() {
    console.log(moduleMessage);
});