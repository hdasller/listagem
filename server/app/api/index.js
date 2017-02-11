var api = {}

var Client = require('node-rest-client').Client;
var client = new Client();

api.lista = function(req, res) {
    var id = parseInt(req.params.pagina);
    
    
   client.get("https://reqres.in/api/users?page="+id, function (data, response) {
    var antigo = data.data;
    var dados = {};

   res.json(antigo); })
   }
    
 api.pagina = function(req, res) {
    
   client.get("https://reqres.in/api/users?page=1", function (data, response) {
    var paginas = data.total_pages;
    

   res.json(paginas); })
   }   




module.exports = api;