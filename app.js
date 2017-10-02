var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json);

Genre = require('./models/genre');
Book = require('./models/book');

//mongod --dbpath "d:\mongoserver" Start the local server first.
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.Connection;

app.get('/',function(req,res){
    res.send('Please use /api/books or /api/genres. Buhaha!');
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/books',function(req,res){
    Book.getBooks(function(err,genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/books/:_id',function(req,res){
    Book.getBookById(req.params._id,function(err,book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);
console.log('Listening on port 3000');