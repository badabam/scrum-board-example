const mongoose = require('mongoose')

const cardSchema = {
  title: String,
  question: String,
  answer: String,
  tags: [String],
  isBookmarked: Boolean,
}

module.exports = mongoose.model('Card', cardSchema)
