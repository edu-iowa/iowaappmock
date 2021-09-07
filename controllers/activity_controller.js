var Activity = require('../models/activity');
var Level = require('../models/level');
var Unit = require('../models/unit');
var async = require('async');

//activity list
exports.activity_list = function(req, res, next) {
    async.parallel({
    list_activities: function(callback){
        Activity.find({'level': req.params.level_id, 'unit': req.params.unit_id})
        .sort([['no', 'ascending']])
        .exec(callback);
    },
    level_chosen: function(callback) {
        Level.findById(req.params.level_id)
        .exec(callback);
    },
    unit_chosen: function(callback) {
        Unit.findById(req.params.unit_id)
        .exec(callback);
    },
}, function(err, results) {
    if (err) {return next(err); }
    if (results.unit_chosen==null) {
        var err = new Error('Unit not found!');
            err.status = 404;
            return next(err);
    }
    res.send({title: 'Choose one activity', activity_list: results.list_activities, level: results.level_chosen, unit: results.unit_chosen});
});   
};

//activity page
exports.activity_page = function(req, res, next) {
    
    async.parallel({
    activity_chosen: function(callback) {
    Activity.findById(req.params.activity_id)
    .exec(callback);
    },
    level_chosen: function(callback) {
        Level.findById(req.params.level_id)
        .exec(callback);
    },
    unit_chosen: function(callback) {
        Unit.findById(req.params.unit_id)
        .exec(callback);
    },
    list_activities: function(callback){
        Activity.find({'level': req.params.level_id, 'unit': req.params.unit_id})
        .sort([['no', 'ascending']])
        .exec(callback);
    },
    
}, function(err, results) {
    if (err) {return next(err); }
    if (results.activity_chosen==null) {
        var err = new Error('Activity not found!');
            err.status = 404;
            return next(err);
    }
    //lists urls in level->unit
    function list_url(){
        var urls = []
        var list = results.list_activities;
            for (var a = 0; a < list.length; a++){
            urls.push(list[a].url);
        };
        return urls
    };
    //gets on what position is the current activity
    var position = list_url().indexOf(results.activity_chosen.url); 
    //generate link to next activity button
    function next_activity(){
        var url_list = list_url();
        var unit = results.unit_chosen;
        var nposition = position + 1;
        var next_url = url_list[nposition];
        if (nposition >= url_list.length) {
            next_url = unit.url;
            return next_url;
        } else {
            return next_url;
        };
    };
    //generate link to previous activity button
    function previous_activity(){
        var url_list = list_url();
        var unit = results.unit_chosen;
        var pposition = position - 1;
        var previous_url = url_list[pposition];
        if (pposition < 0) {
            previous_url = unit.url;
            return previous_url;
        } else {
            return previous_url;
        };
        };

    res.send({previous_url: previous_activity(), next_url: next_activity(), activity: results.activity_chosen, level: results.level_chosen, unit: results.unit_chosen});
    });
};

