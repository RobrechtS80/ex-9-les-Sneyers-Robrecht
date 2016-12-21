/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.json());

app.get('/',function(request,response){
    response.send("hello world");
    
});
var Book = function(id,name){
    this.id=id;
    this.name=name;
    
};

app.get('/books',function(request,response){
    var books=[new Book(1,'kanker'), new Book(2,'potter')];
    response.send(books);
    
});

console.log('hello world');

app.listen(4322);