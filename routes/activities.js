var express = require('express');
var router = express.Router();

//get controllers
var level_controller = require('../controllers/level_controller');
var unit_controller = require('../controllers/unit_controller');
var activity_controller = require('../controllers/activity_controller');

//routes
router.get('/', level_controller.level_list);
router.get('/:id', unit_controller.unit_list);
router.get('/:level_id/:unit_id', activity_controller.activity_list);
router.get('/:level_id/:unit_id/:activity_id', activity_controller.activity_page);
//exports routes
module.exports = router;