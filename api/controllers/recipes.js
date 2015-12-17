'use strict';

var util = require('util');

module.exports = {
   recipes: recipes
};

function recipes(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    /*
    var name = req.swagger.params.name.value || 'stranger';
    var recipes = util.format('Hello, %s!', name);
    */

    var recipes = util.format('Yo, here\'s the %s!', 'recipes');

    res.json(recipes);

}
