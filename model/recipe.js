import crypto from 'node:crypto';

let recipes = [];

export function getRecipes()
{
    return recipes;
}

export function createRecipe({title, ingredients, duration, steps})
{
    const recipe = {
        id: crypto.randomUUID(),
        title,
        ingredients,
        duration,
        steps
    };

    recipes.push(recipe);
    return recipe;
}

export function getRecipe({id})
{
    return recipes.find((r) => r.id === id);
}

export function modifyRecipe({id, title, ingredients, duration, steps})
{
    const recipe = getRecipe({id});

    if (recipe) {
        if (title) recipe.title = title;
        if (ingredients) recipe.ingredients = ingredients;
        if (duration) recipe.duration = duration;
        if (steps) recipe.steps = steps;
    }

    return recipe;
}

export function deleteRecipe({id})
{
    const recipe = getRecipe({id});

    if (recipe)
        recipes = recipes.filter((r) => r.id !== id);

    return recipe;
}
