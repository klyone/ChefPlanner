let categories = [];

export function getCategories()
{
    return categories;
}

export function createCategory({name})
{
    let category = categories.find((c) => c.name.toLowerCase() === name.toLowerCase());

    if (!category) {
        categories.push({name: name.toLowerCase()});
        category = {name: name.toLowerCase()};
    } else {
        category = null;
    }

    return category;
}

export function getCategory({name})
{
    return categories.find((c) => c.name.toLowerCase() === name.toLowerCase());
}

export function modifyCategory({name, newName})
{
    let category = getCategory({name});
    let newCategory = getCategory({name: newName});

    if (category && !newCategory ) {
        categories = categories.map((c) => {
            if (c.name.toLowerCase() == name.toLowerCase()) {
                category = {name: newName.toLowerCase()};
                return category;
            } else {
                return c;
            }
        });
    }

    return (category && newCategory) ? null : category;
}

export function deleteCategory({name})
{
    const category = getCategory({name});
    if (category)
        categories = categories.filter((c) => c.name.toLowerCase() !== name.toLowerCase());

    return category;
}
