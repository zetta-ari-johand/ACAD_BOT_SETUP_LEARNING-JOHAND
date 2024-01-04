const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTestingSchema = new Schema(
  {
    description: {
      type: Schema.ObjectId,
      ref: 'testing_connect'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user_testing', userTestingSchema);
