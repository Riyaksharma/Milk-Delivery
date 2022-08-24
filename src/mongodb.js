const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "milk-delivery";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }
    const db = client.db(databaseName);
  }
);

db.collection("item").insertMany(
  [
    {
      name: "Milk",
      Quantity: 5,
      milk_type: "Cow Milk",
      date: "18-Oct-2021",
    },
    {
      name: "Butter",
      Quantity: 5,
      milk_type: "Low fat Butter",
      date: "18-Oct-2021",
    },
    {
      name: "Milk",
      Quantity: 5,
      milk_type: "Buffalo Milk",
      date: "18-Oct-2021",
    },
  ],
  (error, result) => {
    if (error) {
      return console.log("Unable to connect");
    }
    console.log(result.insertedDate);
  }
);

db.collection("item")
  .find({ date: "19-oct-2021" })
  .toArray((error, item) => {
    if (error) {
      return console.log("No order placed");
    }
    console.log(item);
  });

db.collection("item")
  .updateOne(
    {
      _date: new mongodb.ObjectId("626d8c814eb2a9ed79d2d60b"),
    },
    {
      $set: {
        name: "Milk",
        date: "19-oct-2021",
      },
      $inc: {
        Quantity: +1,
      },
    }
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

db.collection("item_1")
  .deleteOne({
    date: "18-oct-2021",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
