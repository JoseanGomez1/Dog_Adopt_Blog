const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogAdoptionSchema = new Schema({
  dogType: {
    type: String,
    required: true,
  },
  picture: {
    type: Schema.Types.Mixed,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  adoptionReason: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  ownerName: {
    type: String,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('DogAdoption', DogAdoptionSchema);
