var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LevelSchema = new Schema(
    {
        name: {type: String}
        }
);
// Virtual level url
LevelSchema
.virtual('url')
.get(function (){
    return '/activities/' +this.id;
});

module.exports = mongoose.model('Level', LevelSchema);