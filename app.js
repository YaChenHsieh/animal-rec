const express = require('express');
const PORT = process.env.port || process.env.PORT || 3001;

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
server.listen(PORT, () =>{
    console.log( (new Date()) + 'Server is listening on port' + PORT )
});

const exphbs = require('express-handlebars');
const moment = require('moment-timezone');
const bodyParser = require('body-parser');
const path = require('path')

app.engine('hbs', exphbs({
    defaultLayout:'main',
    extname:'.hbs',
    helpers:{}
}));

app.use(express.static(path.join(__dirname,'/public/')));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/views'));

app.get('/',(req,res) =>{
    res.render('home.hbs',{
        layout:false,
    });
});