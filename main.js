/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dal = require("./storage.js");
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
var counter=3;
 var books=[new Book(1,'kanker'), new Book(2,'potter')];
 
app.get('/books',function(request,response){
   
    response.send(books);
    
});
app.post('/books',function(request, response){
    request.body;
    var book=new Book(counter++,request.body.name);
    dal.insertBooks(book, function(){
       response.status(201).send();   
    });
  
});

console.log('hello world');

app.listen(4324);