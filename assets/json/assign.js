// fs & util are built in
var fs = require('fs');
var util = require('util');
var Baby = require('babyparse');
var parse = require('csv-parse');

var json = JSON.parse(fs.readFileSync('1.json', 'utf8'));
var csv = Baby.parse(fs.readFileSync('1-answers.csv', 'utf8'))

// assigns answers
function assign() {

    for (var i = 0; i < csv.data.length; i++) {
        json[i]["correctAnswer"] = csv.data[i][0]-1;
    }
    fs.writeFileSync('t1.json', JSON.stringify(json), 'utf-8');
}

assign();
