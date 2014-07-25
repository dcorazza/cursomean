/*
Este exemplo é parte do Workshop de desenvolvimento com Stack MEAN, 
de Cleuton Sampaio. 

O trabalho Workshop de Desenvolvimento com Stack MEAN de Cleuton Sampaio de Melo Jr
está licenciado com uma Licença Creative Commons - Atribuição-CompartilhaIgual 4.0 
Internacional.

http://creativecommons.org/licenses/

Isso inclui: Textos, páginas, gráficos e código-fonte.
*/

// modelo.js - script que acessa um banco de dados usando o mongoose

http = require('http')
mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/banco', function(erro) {
    if(erro) {
	console.log('erro ao conectar com o banco: ' + erro);
    }
    else {
	console.log('Conexão com o banco OK');
    }
});
schemaEstilo = new mongoose.Schema(
	{ 
		nome : String
	}
);
Estilo = mongoose.model('Estilo',schemaEstilo, 'estilo');

http.createServer(function(req,res) {
	Estilo.find({ nome : 'Rock' }, function(erro,Rock) {
		if (!erro) {
			if(Rock) {
			   res.end(JSON.stringify(Rock));
			}
			else {
			   res.end('Nao encontrado');
			}
		}
		else {
		    res.end(erro);
		}
	});           
      
   }).listen(8080, function() {
       console.log('Aguardando conexoes na porta 8080');
   });


