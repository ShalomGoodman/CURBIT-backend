import Category from '../models/category.js';

/*----- Get Routes -----*/

//Get all Categories
export function getAllCategories(req, res) {
    Category.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
}