import express from 'express';
import {indexController} from './controllers.mjs';

export default function(app) {
    app.use(express.static('public'));

    app.get("/", indexController);
}