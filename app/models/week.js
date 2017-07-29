var mongoose = require('mongoose')
var WeekSchema = require('../schemas/week')
var Week = mongoose.model('Week', WeekSchema)

module.exports = Week