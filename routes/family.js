import express from 'express';
import {getFamily, createPerson, getPerson, modifyPerson, deletePerson} from '../model/family.js';

export const routerFamily = express.Router();

function sendPersonResponse({res, person})
{
     if (person) {
        res.json(person);
    }
    else {
        res.status(404).send("Person not found");
    }
}

routerFamily.get('/', (req, res) => {
    res.json(getFamily());
});

routerFamily.post('/', (req, res) => {
    const {name, age, gender} = req.body;
    res.json(createPerson({name, age, gender}));
});

routerFamily.get('/:id', (req, res) => {
    const id = req.params.id;
    const person = getPerson({id});

    sendPersonResponse({res, person});
});

routerFamily.put('/:id', (req, res) => {
    const id = req.params.id;
    const {name, gender, age} = req.body;
    const person = modifyPerson({id, name, gender, age});

    sendPersonResponse({res, person});
});

routerFamily.delete('/:id', (req, res) => {
    const id = req.params.id;
    const person = deletePerson({id});

    sendPersonResponse({res, person});
});
