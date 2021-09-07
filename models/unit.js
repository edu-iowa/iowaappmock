var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UnitSchema = new Schema(
    {
        level: {type: Schema.Types.ObjectId, ref: 'Level'},
        name: {type: String}
        }
);
// Virtual level url
UnitSchema
.virtual('url')
.get(function (){
    return '/activities/' +this.level +'/' +this.id;
});

module.exports = mongoose.model('Unit', UnitSchema);