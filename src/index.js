const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./db/mongoose");
const Item = require("./model/item");

app.use(express.json());

app.post("/item", (req, res) => {
    const item = new  Item(req.body)
    try {
        await item.save()
        res.send(item)
    }
    catch(error) {
        res.send(error)
    }
})

app.get("/item/:date", async (req, res) => {
    const _date = req.params.date

    try {
        const find_orders = await Item.findById(_date)
        if (!find_orders) {
            res.send("No orders were placed")
        }
        res.send(find_orders)
    }
    catch (error) {
        res.send(error)
        }
})

app.patch("/item/:date", async (req, res) => {
  const updates = Object.keys(req.body); 
  const allowedUpdates = ["name", "Quantity", "milk_type", "date"];
  const isValidate = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidate) {
    return res.send("item not found");
  }
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatords: true,
    });
    if (!item) {
      return res.send("Not found user");
    }
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/item/:date", async (req, res) => {
  try {
    const item = await User.findByIdAndDelete(req.params.date);

    if (!item) {
      return res.status.send();
    }
    res.send(item);
  } catch (error) {
    res.send(error);
  }
});