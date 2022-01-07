const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Simon:motdepasse@cluster0.gzefq.mongodb.net/api?retryWrites=true&w=majority",
  //   "mongodb://127.0.0.1:27017/api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connecté");
    else console.log("Pb de connexion :" + err);
  }
);
