var Level = require('../models/level');

exports.level_list = function(req, res, next) {
    Level.find({}, 'name')
    .exec(function (err, list_levels){
        if (err) {return next(err); }

        res.send({level_list: list_levels});
    });
};
