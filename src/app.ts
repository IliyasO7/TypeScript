//import express from 'express';

//@types/node hepes ts to traslate node js libraries and mekes it understandable

//typescript is deisgned by default for web browser
//adn there we dont have require we have import
/*
import express from 'express';

import bodyParser from 'body-parser'
import todosRooutes from './routes/todos' //alwasy pick defaultexport from file
//import express = require('express')

const app = express();
app.use(bodyParser.json());
app.use(todosRooutes);


app.listen(7000);*/

import express from 'express' ;
import todoRouter from './routes/todos'
import bodyParser from 'body-parser';

const app =express();

app.use(bodyParser.json())

app.use(todoRouter);
app.listen(5000);