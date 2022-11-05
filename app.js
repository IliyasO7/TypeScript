"use strict";
//import express from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@types/node hepes ts to traslate node js libraries and mekes it understandable
//typescript is deisgned by default for web browser
//adn there we dont have require we have import
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos")); //alwasy pick defaultexport from file
//import express = require('express')
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(7000);
