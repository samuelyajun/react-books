import React, {Component} from 'react';
import $ from "jquery";
import { ajax } from "jquery";
import _ from 'lodash';

var books=[
    {
        "id": 1,
        "title": "a",
        "author": "author1",
        "publication": "publication year 1",
        "genre": "genre1",
        "links": "link1"
    },

    {
        "id": 2,
        "title": "title2",
        "author": "author2",
        "publication": "publication year 2",
        "genre": "genre2",
        "links": "link2"
    },

    {
        "id": 3,
        "title": "title3",
        "author": "author3",
        "publication": "publication year 3",
        "genre": "genre3",
        "links": "link3"
    },

    {
        "id": 4,
        "title": "title4",
        "author": "author4",
        "publication": "publication year 4",
        "genre": "genre4",
        "links": "link4"
    },

    {
        "id": 5,
        "title": "title5",
        "author": "author5",
        "publication": "publication year 5",
        "genre": "genre5",
        "links": "link5"
    }
];


module.exports = {
  getAllBooks: function() {
        return books;
        },

  getFilteredBooks: function(query) {

        // $.ajax({
        //     url : "http://localhost:8080/src/jsons/books.json" ,
        //     dataType : 'json',
        //     success : function(data) {

        //           books = data;  

        //     }
        // });

        var foundBooks=[];


        for(var i=0;  i<books.length; i++) {

            for (var j in Object.keys(books[i])) {
                 var prop = Object.keys(books[i])[j];
                if (books[i][prop]=== query) {
                    foundBooks.push(books[i]); 
                }
            }
        }
        return foundBooks;
  }
};