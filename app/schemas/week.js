var mongoose = require('mongoose')
var moment = require('moment')
var WeekSchema = new mongoose.Schema({
	weeknumber: {
        type: Number,
        unique: true,
        default: moment(Date.now()).format('ww'),
    },
    count: {
        type: Number,
        default: 1,
    }
})


WeekSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function(id, cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	},
}

module.exports = WeekSchema