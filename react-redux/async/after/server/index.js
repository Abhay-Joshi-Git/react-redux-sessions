var express =  require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();

app.use(bodyParser());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var employees = [
    {
        name: 'Alpha',
        department: 'manufacturing'
    }
];

app.get('/employees', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify(employees));

    setTimeout(function() {
        res.send(JSON.stringify(employees));
    }, 2000);
    
});

app.post('/employee', function(req, res) {
    var item = req.body;
    console.log("item - ", item);
    if (!_.find(employees, {name: item.name})) {
        employees.push(item);
        res.send('ok');
    } else {
        res.status(400).send('record already there');
    }
});

var server = app.listen(3000, function() {
    console.log('listening at 3000');
});
