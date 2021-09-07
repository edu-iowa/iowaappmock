var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ActivitySchema = new Schema(
    {
        level: {type: Schema.Types.ObjectId, ref: 'Level'},
        unit: {type: Schema.Types.ObjectId, ref: 'Unit'},
        no: {type: Number},
        difficulty: {type: String, enum: ['Normal', 'Hard'], defaut: 'Normal' }         
    }
);
// Virtual Activity url
ActivitySchema
.virtual('url')
.get(function (){
    return '/activities/' +this.level +'/' +this.unit +'/' +this.id;
});


module.exports = mongoose.model('Activity', ActivitySchema);