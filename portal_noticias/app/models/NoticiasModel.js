function NoticiasModel() {

}

NoticiasModel.prototype.getNoticias = (connection, callback) => {
    connection.query("SELECT * FROM noticias", callback);
}

NoticiasModel.prototype.getNoticia = (id, connection, callback) => {
    connection.query("SELECT * FROM noticias WHERE id_noticia = ? ", id, callback);
}

NoticiasModel.prototype.saveNews = (noticia, connection, callback) => {
    connection.query("INSERT INTO noticias SET ? ", noticia, callback);
}

NoticiasModel.prototype.getLastFiveNews = ( connection, callback ) => {
    connection.query("SELECT * FROM noticias ORDER BY data_noticia DESC LIMIT 5", callback);
}

module.exports = function() {
    return NoticiasModel;
}