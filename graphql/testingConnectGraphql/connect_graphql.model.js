const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testingConnectSchema = new Schema(
  {
    description: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('testing_connect', testingConnectSchema);
