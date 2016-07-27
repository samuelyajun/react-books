import React, {Component} from 'react';
import $ from "jquery";
import { ajax } from "jquery";
import _ from 'lodash';

var books=[];

module.exports = {
  getBooks: function() {

        $.ajax({
                url : "http://localhost:8080/src/jsons/books.json" ,
                dataType : 'json',
                success : function(data) {
                        books = data;
                }
            });

        return books;
        }
};