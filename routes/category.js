import express from 'express';
import {getCategories, createCategory, getCategory, modifyCategory, deleteCategory} from '../model/category.js';

export const routerCategory = express.Router();

function sendCategoryResponse({res, category, code = 404, msg = "Category not found"})
{
    if (category) {
        res.json(category);
    }
    else {
        res.status(code).send(msg);
    }
}

routerCategory.get('/', (req, res) => {
    res.json(getCategories());
});

routerCategory.post('/', (req, res) => {
    const {name} = req.body;
    const category = createCategory({name});
    sendCategoryResponse({res, category, code: 409, msg: "Category already exists"});
});

routerCategory.get('/:name', (req, res) => {
    const name = req.params.name;
    const category = getCategory({name});

    sendCategoryResponse({res, category});
});

routerCategory.put('/:name', (req, res) => {
    const name = req.params.name;
    const {newName} = req.body;
    const category = modifyCategory({name, newName});
    const categoryResponse = {res, category};

    if (category === null) {
        categoryResponse.code = 409;
        categoryResponse.msg = "Category already exists";
    }

    sendCategoryResponse(categoryResponse);
});

routerCategory.delete('/:name', (req, res) => {
    const name = req.params.name;
    const category = deleteCategory({name});

    sendCategoryResponse({res, category});
});
