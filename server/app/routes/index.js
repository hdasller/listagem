var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
      app.route('/v1/fotos')
               .get(api.lista);
    app.route('/v1/fotos/:pagina')
               .get(api.lista);

    app.route('/v1/pagina')
               .get(api.pagina);

    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};