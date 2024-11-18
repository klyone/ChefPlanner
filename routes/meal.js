import express from 'express';
import {getMeals, createMeal, getMeal, modifyMeal, deleteMeal} from '../model/meal.js';

export const routerMeal = express.Router();

function sendMealResponse({res, meal})
{
     if (meal) {
        res.json(meal);
    }
    else {
        res.status(404).send("Meal not found");
    }
}

routerMeal.get('/', (req, res) => {
    res.json(getMeals());
});

routerMeal.post('/', (req, res) => {
    const {date, lunch, dinner} = req.body;
    res.json(createMeal({date, lunch, dinner}));
});

routerMeal.get('/:date', (req, res) => {
    const date = req.params.date;
    const meal = getMeal({date});

    sendMealResponse({res, meal});
});

routerMeal.put('/:date', (req, res) => {
    const date = req.params.date;
    const {lunch, dinner} = req.body;
    const meal = modifyMeal({date, lunch, dinner});

    sendMealResponse({res, meal});
});

routerMeal.delete('/:date', (req, res) => {
    const date = req.params.date;
    const meal = deleteMeal({date});

    sendMealResponse({res, meal});
});
