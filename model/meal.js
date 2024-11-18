let meals = [];

export function getMeals()
{
    return meals;
}

export function createMeal({date, lunch, dinner})
{
    const newMeal = {date, lunch, dinner};
    const meal = meals.find((m) => m.date === date);

    if (!meal)
        meals.push(newMeal);

    return meal ? meal : newMeal;
}

export function getMeal({date})
{
    return meals.find((m) => m.date === date);
}

export function modifyMeal({date, lunch, dinner})
{
    const meal = getMeal({date});

    if (meal) {
        if (lunch) meal.lunch = lunch;
        if (dinner) meal.dinner = dinner;
    }

    return meal;
}

export function deleteMeal({date})
{
    const meal = getMeal({date});

    if (meal)
        meals = meals.filter((m) => m.date !== date);

    return meal;
}
