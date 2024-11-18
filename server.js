import express from 'express';
import {routerFamily} from './routes/family.js';
import {routerCategory} from './routes/category.js';
import {routerRecipe} from './routes/recipe.js';
import {routerMeal} from './routes/meal.js';

const serverPort = process.env.PORT ?? 8080;

let server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/family', routerFamily);
server.use('/category', routerCategory);
server.use('/recipe', routerRecipe);
server.use('/meal', routerMeal);

server.get('/', (req, res) => {
    res.send("Hello World!");
});

server.listen(serverPort, () => {
    console.log("ChefPlanner server started!");
});
