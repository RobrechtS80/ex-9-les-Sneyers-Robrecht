/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());

console.log('hello world');

app.listen(4321);