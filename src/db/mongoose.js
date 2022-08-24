const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017//milk-delivery-api");

const Item = mongoose.model("Item", {
  name: {
    type: String,
  },
  Quantity: {
    type: Number,
  },
  milk_type: {
    type: String,
  },
  date: {
    type: String,
  },
});

const item_1 = new Item({
  name: "Milk",
  Quantity: 5,
  milk_type: "Cow Milk",
  date: "18-Oct-2021",
});

const item_2 = new Item({
  name: "Butter",
  Quantity: 5,
  milk_type: "Low fat Butter",
  date: "18-Oct-2021",
});

const item_3 = new Item({
  name: "Milk",
  Quantity: 5,
  milk_type: "Buffalo Milk",
  date: "18-Oct-2021",
});

item_1
  .save()
  .then((item_1) => {
    console.log(item_1);
  })
  .catch((error) => {
    console.log("ERROR!!", error);
  });

item_2
  .save()
  .then((item_1) => {
    console.log(item_2);
  })
  .catch((error) => {
    console.log("ERROR!!", error);
  });
item_3
  .save()
  .then((item_1) => {
    console.log(item_3);
  })
  .catch((error) => {
    console.log("ERROR!!", error);
  });
