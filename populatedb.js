#! /usr/bin/env node


// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Activity = require('./models/activity')
var Unit = require('./models/unit')
var Level = require('./models/level')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var activities = []
var units = []
var levels = []

function levelCreate(name, cb) {
  leveldetail = {name: name}
  var level = new Level(leveldetail);

  level.save(function (err){
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Level:' + level);
    levels.push(level)
    cb(null, level)
  });
}

function unitCreate(level, name, cb){
  unitdetail = {name: name}
  if (level != false) unitdetail.level = level

  var unit = new Unit(unitdetail);
  unit.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Unit: ' + unit);
    units.push(unit)
    cb(null, unit)
  });
  }

  function activityCreate(level, unit, no, difficulty, cb){
    activitydetail = {
      no: no,
      difficulty: difficulty
      }
    if (level != false) activitydetail.level = level
    if (unit != false) activitydetail.unit = unit
    var activity = new Activity(activitydetail);
    activity.save(function (err) {
      if (err) {
        cb(err, null)
        return
      }
      console.log('New Activity: ' + activity);
      activities.push(activity)
      cb(null, activity)
    });
    }
  
function createLevels(cb) {
  async.series([
    function(callback) {
      levelCreate('Kick Off', callback);
    },
    function(callback) {
      levelCreate('Basic 1', callback);
    },
  ],
  cb); 
}

function createUnits(cb) {
  async.series([
    function(callback) {
      unitCreate(levels[0],'Unit 1', callback);
    },
    function(callback) {
      unitCreate(levels[0],'Unit 2', callback);
    },
    function(callback) {
      unitCreate(levels[0],'Unit 3', callback);
    },
    function(callback) {
      unitCreate(levels[0],'Unit 4', callback);
    },
    function(callback) {
      unitCreate(levels[0],'Unit 5', callback);
    },
    function(callback) {
      unitCreate(levels[0],'Unit 6', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 1', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 2', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 3', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 4', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 5', callback);
    },
    function(callback) {
      unitCreate(levels[1],'Unit 6', callback);
    },
  ],
  cb); 
}

function createActivities(cb) {
  async.parallel([
    function(callback) {
      activityCreate(levels[0], units[0], 1, 'Normal', callback);
    },
    function(callback) {
      activityCreate(levels[0], units[0], 2, 'Normal', callback);
    },
    function(callback) {
      activityCreate(levels[0], units[1], 1, 'Normal', callback);
    },
    function(callback) {
      activityCreate(levels[1], units[2], 1, 'Normal', callback);
    },
    function(callback) {
      activityCreate(levels[1], units[3], 1, 'Hard', callback);
    },
  ],
  cb); 
}



async.series([
    createLevels,
    createUnits,
    createActivities
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Deu certo, porra!');
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




