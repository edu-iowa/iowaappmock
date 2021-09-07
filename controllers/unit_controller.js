var Unit = require('../models/unit');
var Level = require('../models/level');
var async = require('async');



exports.unit_list = function(req, res, next) {
    async.parallel({
        level_chosen: function(callback) {
            Level.findById(req.params.id)
            .exec(callback);
        },
        level_units: function(callback) {
            Unit.find({ 'level': req.params.id})
            .exec(callback);
        },
    }, function(err, results) {
        if (err) {return next(err); }
        if (results.level_chosen==null) {
            var err = new Error('Level not found!');
            err.status = 404;
            return next(err);
        }
        res.send({title: 'Choose a unit', level: results.level_chosen, level_units: results.level_units});
    });
};

