import express from 'express';
import {getRecipes, createRecipe, getRecipe, modifyRecipe, deleteRecipe} from '../model/recipe.js';

export const routerRecipe = express.Router();

function sendRecipeResponse({res, recipe})
{
     if (recipe) {
        res.json(recipe);
    }
    else {
        res.status(404).send("Recipe not found");
    }
}

routerRecipe.get('/', (req, res) => {
    res.json(getRecipes());
});

routerRecipe.post('/', (req, res) => {
    const {title, ingredients, duration, steps} = req.body;
    res.json(createRecipe({title, ingredients, duration, steps}));
});

routerRecipe.get('/:id', (req, res) => {
    const id = req.params.id;
    const recipe = getRecipe({id});

    sendRecipeResponse({res, recipe});
});

routerRecipe.put('/:id', (req, res) => {
    const id = req.params.id;
    const {title, ingredients, duration, steps} = req.body;
    const recipe = modifyRecipe({id, title, ingredients, duration, steps});

    sendRecipeResponse({res, recipe});
});

routerRecipe.delete('/:id', (req, res) => {
    const id = req.params.id;
    const recipe = deleteRecipe({id});

    sendRecipeResponse({res, recipe});
});
