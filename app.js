var express = require('express');
var path    = require('path');
//var http = require('http');
var app = express();

var routes = require('./routes');
var bodyParser = require('body-parser');

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('views/index.pug');
app.use(function(req, res, next){
    //console.log('I am a middleware');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    var people = ['geddy', 'neil', 'alex', 'marcio', 'jose'];
    res.render('index', {
        message: 'Express Home',
        title: 'First App Express',
        people: people
    });
})



app.use('/hello', routes);

//intercepta erro da aplicação
// app.use(function(err, req, res, next){
//     res.status(500)
//        .json({
//             messasge: 'Ocorreu um erro',
//             error: err
//        });
// });

app.listen(3000, function(){
    console.log('Aplicação iniciada porta 3000');
});

// http.createServer(app).listen(3000, function(){
//     console.log('Aplicação iniciada porta 3000');
// });
