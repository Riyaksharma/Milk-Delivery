const mongoose = require("mongoose");
const validator = require("validator");

const Item = new mongoose.Schema("Item", {
  name: {
    type: String,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
    default: 1,
    Validate(value) {
      if (value < 1) {
        throw new error("Must choose minimum 1");
      }
    },
  },
  milk_type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

Item.statics.findByCredentials = async (name, date) => {
  const item = await Item.findOne({ date: date });

  if (!item) {
    throw new Error("No order placed on this date");
  }
  return item;
};
